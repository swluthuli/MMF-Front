import { carConstants } from '../constants/car.constant';

export function cars(state = {}, action) {
  switch (action.type) {
    case carConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case carConstants.GETALL_SUCCESS:
      return {
        items: action.cars
      };
    case carConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case carConstants.DELETE_REQUEST:
      // add 'deleting:true' property to car being deleted
      return {
        ...state,
        items: state.items.map(car =>
          car.id === action.id
            ? { ...car, deleting: true }
            : car
        )
      };
    case carConstants.DELETE_SUCCESS:
      // remove deleted car from state
      return {
        items: state.items.filter(car => car.id !== action.id)
      };
    case carConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to car 
      return {
        ...state,
        items: state.items.map(car => {
          if (car.id === action.id) {
            // make copy of car without 'deleting:true' property
            const { deleting, ...carCopy } = car;
            // return copy of car with 'deleteError:[error]' property
            return { ...carCopy, deleteError: action.error };
          }

          return car;
        })
      };
    default:
      return state
  }
}