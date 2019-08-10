import React, { Component } from 'react';
import { Table, Card, CardHeader, CardBody } from 'reactstrap';
import TableRow from '../tables/TableRow';
import { connect } from 'react-redux';


class Users extends Component {

state ={
  users : []
}
 
async componentDidMount() {
  this.setState({users : this.props.users.users})
}
  tabRow(){
    return this.state.users.map(function(users, i){
        return <TableRow obj={users} key={i} />;
    });
  }

   
    render() {
  
        return ( <div className="animated fadeIn">
          <Table>


            
          </Table>
        <Card>
          <CardHeader>All Users</CardHeader>
          <CardBody>
            <Table>
              <thead style={{ backgroundColor: '#fff' }}>
                <tr>
                  <th>Username</th>
                  <th>Firt Name</th>
                  <th>Last Name</th>
                  <th>Contact no</th>
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
function mapStateToProps({ users }) {
  return {
      users
  }
};

export default connect(mapStateToProps)(Users);