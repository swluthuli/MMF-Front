import { carConstants } from '../constants/car.constant';
import { carService } from '../services/car.service';
import { alertActions } from './aleart.actions';
import { toastr } from 'react-redux-toastr'
export const carActions = {
    register,
    getAll,
    delete: _delete,
    update
};


function register(car) {
    return dispatch => {
        dispatch(request(car));

        carService.register(car)
            .then(
                car => { 
                    dispatch(success());
                    dispatch(alertActions.success('Registration successful'));
                    toastr.success('Registration successful')
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    toastr.success('Registration successful')
                }
            );
    };

    function request(car) { return { type: carConstants.REGISTER_REQUEST, car } }
    function success(car) { return { type: carConstants.REGISTER_SUCCESS, car } }
    function failure(error) { return { type: carConstants.REGISTER_FAILURE, error } }
};

function update(car) {
    return dispatch => {
        dispatch(request(car));

        carService.update(car)
            .then(
                car => { 
                    dispatch(success());
                    dispatch(alertActions.success('Registration successful'));
                    toastr.success('booking was successful');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    toastr.warning(error.message.toString());
                }
            );
    };

    function request(car) { return { type: carConstants.REGISTER_REQUEST, car } }
    function success(car) { return { type: carConstants.REGISTER_SUCCESS, car } }
    function failure(error) { return { type: carConstants.REGISTER_FAILURE, error } }
};

function getAll() {
 
    return dispatch => {
        dispatch(request());

        carService.getAll()
            .then(
                cars => dispatch(success(cars)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: carConstants.GETALL_REQUEST } }
    function success(cars) { return { type: carConstants.GETALL_SUCCESS, cars } }
    function failure(error) { return { type: carConstants.GETALL_FAILURE, error } }
}




// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id)); 

        carService.delete(id)
            .then(
                car => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: carConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: carConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: carConstants.DELETE_FAILURE, id, error } }
}