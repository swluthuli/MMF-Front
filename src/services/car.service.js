import { authHeader } from '../helpers/auth-header';
import axios from 'axios';
export const carService = {
    register,
    getAll,
    getById,
    update,
    delete: _delete
};


function getAll() {
    return axios.get(`http://localhost:4000/cars`, {headers:  authHeader()})
        .then(cars => {
            return cars.data;
        });
}


function getById(id) {

    return axios.get(`http://localhost:4000/cars/${id}`, {headers:  authHeader() })
    .then(car => {
        return car.data;
    });
}

function register(car) {
    return axios.post(`http://localhost:4000/car/register`, car,{ headers:  authHeader() });

}


function update(car) {
    return axios.put(`http://localhost:4000/customers/${car.carid}`,car, { headers:  authHeader()});
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`http://localhost:8080/cars/${id}`, requestOptions).then(handleResponse);
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