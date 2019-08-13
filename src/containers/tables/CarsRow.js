import React, { Component } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { IconContext } from "react-icons";
import {Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { carActions } from '../../_actions/car.action';
class CarsRow extends Component {

  constructor(props) {
    super(props);



    this.deleteuser = this.deleteuser.bind(this);
}

  deleteuser(e, id){
    e.preventDefault();
    this.props.deleteUser(id);
  }


  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.vehicle}
          </td>
          <td>
            {this.props.obj.year}
          </td>
          <td>
            {this.props.obj.fuel}
          </td>
          <td>
          <IconContext.Provider
      value={{  size: '25px', className:"bookIcons" }}
    >
      <div>
        <Row form>
<Col md={6}> <FaRegTrashAlt color='red'  onClick={(e) => this.deleteuser(e, this.props.obj._id)} /></Col>
<Col md={6}> <Link to={"/caredit/"+ this.props.obj._id}><FaRegEdit color='orange' /></Link></Col>
        </Row>
      </div>
    </IconContext.Provider>
          </td>
        </tr>
    );
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: id => dispatch(carActions.delete(id))
  }
};

export default connect(null,mapDispatchToProps)(CarsRow);