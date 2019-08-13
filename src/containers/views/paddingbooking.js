import React, { Component } from 'react';
import { Table, Card, CardHeader, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import BookingRow from '../tables/BookingRow'
class paddingbooking extends Component {

  state ={
    bookings : []
  }
  async componentDidMount(){
    let user = JSON.parse(localStorage.getItem('user'));
    let Authorization = 'Bearer ' + user.data.token;
     axios.get(`http://localhost:8080/bookings`, {
      headers:{Authorization: Authorization }}).then(res=> {
        const bookings = res.data;
      
        this.setState({bookings});
      })
  }
  tabRow(){
    return this.state.bookings.map(function(object, i){
        return <BookingRow obj={object} key={i} />;
    });
  }

  render() {
 
  return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>All bookings</CardHeader>
          <CardBody>
            <Table>
              <thead style={{ backgroundColor: '#fff' }}>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Contact no</th>
                  <th>Pickup Date</th>
                  <th>Return Date</th>
                  <th>Reg Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              { this.tabRow() }
              </tbody>
            </Table>
            </CardBody>
        </Card>
      
             
            </div>
        );
    }
}
function mapStateToProps(state) {
  const { users} = state.users;
  return {
      users
  };
}


export default connect(mapStateToProps,null)(paddingbooking);
