import { bookingConstants } from '../constants/booking.constants';



export function bookings(state = {}, action) {
  switch (action.type) {
    case bookingConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case bookingConstants.GETALL_SUCCESS:
      return {
        items : action.bookings
      };
    case bookingConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case bookingConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
            bookings.id === action.id
            ? { ...bookings, deleting: true }
            : bookings
        )
      };
    case bookingConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(bookings => bookings.id !== action.id)
      };
    case bookingConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
        items: state.items.map(bookings => {
          if (bookings.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...bookingCopy } = bookings;
            // return copy of user with 'deleteError:[error]' property
            return { ...bookingCopy, deleteError: action.error };
          }

          return bookings;
        })
      };
    default:
      return state
  }
}