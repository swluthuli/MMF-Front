import React, { Component } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { IconContext } from "react-icons";
import './tables.css';
import {Row, Col} from 'reactstrap'
class BookingRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.firstName}
          </td>
          <td>
            {this.props.obj.lastName}
          </td>
          <td>
            {this.props.obj.contact_number}
          </td>
          <td>
            {this.props.obj.PickDate}
          </td>
          <td>
            {this.props.obj.returnDate}
          </td>
          <td>
            {this.props.obj.createdDate}
          </td>
          <td>

          <IconContext.Provider
      value={{  size: '25px', className:"bookIcons" }}
    >
      <div>
        <Row form>
<Col md={6}> <FaRegTrashAlt color='red' /></Col>
<Col md={6}> <FaRegEdit color='orange'/></Col>
        </Row>
      </div>
    </IconContext.Provider>
           
          </td>
       
        </tr>
    );
  }
}

export default BookingRow;