import React from 'react';
import { Card, CardHeader, CardBody, Table } from 'reactstrap';
import CarsRow from '../tables/CarsRow';
import { connect } from 'react-redux';
class Cars extends React.Component {

  state = {
    cars: []
  }

  async componentDidMount() {
    this.setState({cars : this.props.cars.items})
  }

  tabRow() {
    return this.state.cars.map(function (object, i) {
      return <CarsRow obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>All Cars</CardHeader>
          <CardBody>
            <Table>
              <thead style={{ backgroundColor: '#fff' }}>
                <tr>
                  <th>Brand</th>
                  <th>Vehicle</th>
                  <th>Model Year</th>
                  <th>Fuel Type</th>
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
function mapStateToProps({ cars }) {
  return {
      cars
  }
};

export default connect(mapStateToProps)(Cars);