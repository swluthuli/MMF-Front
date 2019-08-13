import { authHeader } from '../helpers/auth-header';
import axios from 'axios';
export const userService = {
    login,
    logout,
    register,
    getAll,
    getAllCars,
    getById,
    update,
    delete: _delete,
    addcar,
    book
};



function login(username, password) {
  
    return axios.post(`http://localhost:8080/users/authenticate`, { username, password })
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    return axios.get(`http://localhost:8080/customers`, {headers:  authHeader()})
        .then(users => {
            return users.data;
        });
}

function getAllCars() {
    return axios.get(`http://localhost:8080/cars`, {headers: authHeader() })
        .then(cars => {
            return cars.data;
        });
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://localhost:8080/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    return axios.post(`http://localhost:8080/customers/register`, user,{ headers:  authHeader()});

}

function addcar(user) {
    return axios.post(`http://localhost:8080/cars/register`,user ,{ headers:  authHeader() });

}

function book(user) {
    return axios.post(`http://localhost:8080/bookings/register`,user ,{ headers:  authHeader() });

}

function update(user) {
    return axios.put(`http://localhost:8080/customers/${user.userid}`,user, { headers:  authHeader() });
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return axios.delete(`http://localhost:8080/customers/${id}`, { headers:  authHeader() });
    
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