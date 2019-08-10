import React, { Component } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { IconContext } from "react-icons";
import './tables.css';
import {Row, Col} from 'reactstrap'
class CarsRow extends Component {
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

export default CarsRow;