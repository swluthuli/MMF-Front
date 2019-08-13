import React, { Component } from 'react';
import BookForm from '../forms/BookForm';
import { Row} from 'reactstrap';
import { connect } from 'react-redux';
class Book extends Component {
    state = {
        cars: []
      }

      async componentDidMount(){
        this.setState({cars : this.props.cars.items})
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
function mapStateToProps({ cars }) {
  return {
      cars
  }
};


export default connect(mapStateToProps)(Book);
