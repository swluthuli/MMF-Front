import React, { Component } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { IconContext } from "react-icons";
import './tables.css';
import { Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.obj.email}
        </td>
        <td>
          {this.props.obj.firstName}
        </td>
        <td>
          {this.props.obj.lastName}
        </td>
        <td>
          {this.props.obj.contact}
        </td>
        <td>
          <IconContext.Provider
            value={{ size: '25px', className: "bookIcons" }}>
            <div>
              <Row form>
                <Col md={6}> <FaRegTrashAlt color='red' /></Col>
                <Col md={6}> <Link to={"/useredit/"+ this.props.obj._id}><FaRegEdit color='orange' /></Link></Col>
              </Row>
            </div>
          </IconContext.Provider>
        </td>
      </tr>
    );
  }
}

export default TableRow;