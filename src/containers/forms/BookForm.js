import React from 'react';
import { Row,Col ,CardGroup,Card,CardBody,CardImg ,CardTitle, CardText} from 'reactstrap';
import { connect } from 'react-redux';
import { FaCoins } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import {Link} from 'react-router-dom';

class BookForm extends React.Component {

  render() {
    const car = require('../../assets/h1_bus.jpg');
    
    

    return (
      <Col sm="3" className="clearfix" style={{ padding: '.5rem' }}>
      <CardGroup>
      <Card>
      <CardImg top width="100%" src={car} alt="Card image cap" />
      <CardBody>
        <CardTitle>{this.props.obj.name}</CardTitle>
        <CardText>
          <Row>
          <Col sm="6">
          <FaCoins /> {this.props.obj.price} per day
          
          </Col>
          <Col sm="6">
          <FaCogs />  {this.props.obj.fuel}
          
          </Col>
          </Row>
          <Row>
          <Col sm="6">
          <IoIosCalendar />  {this.props.obj.year}
          
          </Col>
          <Col sm="6">
          <FaUserFriends /> {this.props.obj.seats} seater
          
          </Col>
          </Row>
          </CardText>
        <Link to={"/edit/"+ this.props.obj._id} className="btn btn-primary">Book ></Link>
      </CardBody>
    </Card>
</CardGroup>
</Col>

    );
  }
}
export default connect()(BookForm)