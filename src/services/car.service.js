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
    return axios.get(`http://localhost:8080/cars`, {headers:  authHeader()})
        .then(cars => {
            return cars.data;
        });
}


function getById(id) {

    return axios.get(`http://localhost:8080/cars/${id}`, {headers:  authHeader() })
    .then(car => {
        return car.data;
    });
}

function register(car) {
    return axios.post(`http://localhost:8080/car/register`, car,{ headers:  authHeader() });

}


function update(car) {
    return axios.put(`http://localhost:8080/cars/${car.carid}`,car, { headers:  authHeader() });
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return axios.delete(`http://localhost:8080/cars/${id}`,{ headers:  authHeader() });
}
