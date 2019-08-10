import { bookingConstants } from '../constants/booking.constants';
import { bookingService } from '../services/booking.service';
import { alertActions } from './aleart.actions';
import { toastr } from 'react-redux-toastr'
export const bookingActions = {
    register,
    getAll,
    delete: _delete,
    update
};


function register(booking) {
    return dispatch => {
        dispatch(request(booking));

        bookingService.register(booking)
            .then(
                booking => { 
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

    function request(booking) { return { type: bookingConstants.REGISTER_REQUEST, booking } }
    function success(booking) { return { type: bookingConstants.REGISTER_SUCCESS, booking } }
    function failure(error) { return { type: bookingConstants.REGISTER_FAILURE, error } }
};




function update(booking) {
    return dispatch => {
        dispatch(request(booking));

        bookingService.update(booking)
            .then(
                booking => { 
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

    function request(booking) { return { type: bookingConstants.REGISTER_REQUEST, booking } }
    function success(booking) { return { type: bookingConstants.REGISTER_SUCCESS, booking } }
    function failure(error) { return { type: bookingConstants.REGISTER_FAILURE, error } }
};

function getAll() {
 
    return dispatch => {
        dispatch(request());

        bookingService.getAll()
            .then(
                bookings => dispatch(success(bookings)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: bookingConstants.GETALL_REQUEST } }
    function success(bookings) { return { type: bookingConstants.GETALL_SUCCESS, bookings } }
    function failure(error) { return { type: bookingConstants.GETALL_FAILURE, error } }
}




// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id)); 

        bookingService.delete(id)
            .then(
                booking => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: bookingConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: bookingConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: bookingConstants.DELETE_FAILURE, id, error } }
}