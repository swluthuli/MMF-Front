import { authHeader } from '../helpers/auth-header';
import axios from 'axios';
export const bookingService = {
    register,
    getAll,
    getById,
    update,
    delete: _delete,
};



function getAll() {
    return axios.get(`http://localhost:8080/bookings`, {headers:  authHeader()})
        .then(bookings => {
            return bookings.data;
        });
}


function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://localhost:8080/users/${id}`, requestOptions).then(handleResponse);
}

function register(booking) {
    return axios.post(`http://localhost:8080/bookings/register`, booking,{headers:  authHeader()});

}

function update(booking) {
    return axios.put(`http://localhost:8080/bookings/${booking.bookingid}`,booking, {headers:  authHeader()});
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`http://localhost:8080/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                console.log("something went wrong");

            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}