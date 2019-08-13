import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers/history';
import { alertActions } from '../_actions/aleart.actions';
import Home from './Home';
import Login from './Login';
import ReduxToastr from 'react-redux-toastr';
import { userActions } from '../_actions/user.action';
import { carActions } from '../_actions/car.action'
import { bookingActions } from '../_actions/booking.action';
class App extends Component {

  constructor(props) {
    super(props);

   
    history.listen((location, action) => {
        // clear alert on location change
        this.props.clear();
    });
}
async componentDidMount() {
  this.props.getAllUsers();
  this.props.getAllCars();
  this.props.getAllBookings();
}



  render() {
    const { authentication ,user } = this.props;
    console.log(user);
    
    return (
      <div>
         <ReduxToastr />
        <BrowserRouter history={history}>
          <Switch>
            {
              authentication && user ? <Route path="/" name="Home" component={Home} /> : <Route path="/" name="Login Page" component={Login} />
            }
          </Switch>
        </BrowserRouter>




        
      </div>

    );
  }
}

function mapStateToProps({ authentication }) {
  return {
    authentication,
    user: !!localStorage.user
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(userActions.getAll()),
    getAllCars:() => dispatch(carActions.getAll()),
getAllBookings :() => dispatch(bookingActions.getAll()),
clear : () => dispatch(alertActions.clear())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
