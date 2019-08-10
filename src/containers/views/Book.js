import React, { Component } from 'react';
import BookForm from '../forms/BookForm';
import { Row} from 'reactstrap';
import axios from 'axios';
class Book extends Component {
    state = {
        cars: []
      }

      async componentDidMount(){
        let user = JSON.parse(localStorage.getItem('user'));
        let Authorization = 'Bearer ' + user.data.token;
         axios.get(`http://localhost:4000/cars`, {
          headers:{Authorization: Authorization }}).then(res=> {
            const cars = res.data;
          
            this.setState({cars});
          
          })
      }
      tabRow(){
        return this.state.cars.map(function(object, i){
            return <BookForm fluid obj={object} key={i} />;
           
        });
    }
    render() {
        return (
            <div className="animated fadeIn">
          
          <Row>
        
         
          { this.tabRow() }
        
          
              </Row>  
      
         
                
            </div>
        );
    }
}

export default Book;
