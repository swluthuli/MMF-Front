import { combineReducers } from "redux";
import {users} from "./users.reducer";
import {bookings} from './booking.reducer'
import {authentication} from "./authentication.reducer";
import {alert} from './alert.reducer';
import {registration} from './registration.reducer';
import {cars} from './cars.reducer'
import { reducer as toastr } from 'react-redux-toastr';
const rootReducer = combineReducers({
    users,
    authentication,
    alert,
    registration,
    toastr,
    cars,
    bookings
});

export default rootReducer;
