import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardHeader } from 'reactstrap';
import { userActions } from '../../_actions/user.action';
import { connect } from 'react-redux';
class CarForm extends React.Component {

  constructor(props) {
    super(props);



    this.state = {
      name: '',
      vehicle: '',
      overview:'',
      price:'',
      fuel: '',
      year: '',
      seats: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, vehicle, overview,price, fuel, year,seats} = this.state;
    const { dispatch } = this.props;
    const car = { name, vehicle, overview,price, fuel, year,seats }
    if (car) {
      dispatch(userActions.addcar(car));
    }
  }


  render() {

    const { name, vehicle, overview, price,fuel, year,seats } = this.state;
    return (
      <Card>
        <CardHeader>Register Car</CardHeader>
        <CardBody>
          <Form onSubmit={this.handleSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Vehicle Brand</Label>
                  <Input 
                  type="select" 
                  name="name" 
                  id="name" 
                  placeholder="e.g WV"
                  value={name}
                  onChange={this.handleChange}
                  >
                    <option>select</option>
                    <option>Ford</option>
                    <option>Volkswagen</option>
                    <option>Nissan</option>
                    <option>Toyota</option>
                    <option>Hyundai</option>
                    <option>BMW</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="vehicle">Vehicle Name</Label>
                  <Input 
                  type="text" 
                  name="vehicle" 
                  id="vehicle" 
                  placeholder="e.g Polo Tsi" 
                  value={vehicle}
                  onChange={this.handleChange}/>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
<Col md={6}>
<FormGroup>
              <Label for="overview">Vehicle Overview</Label>
              <Input 
              type="textArea" 
              name="overview" 
              id="overview"
              value={overview}
                  onChange={this.handleChange} />
            </FormGroup>

</Col>
<Col md={6}>
<FormGroup>
              <Label for="overview">Price Per Day</Label>
              <Input 
              type="textArea" 
              name="price" 
              id="price"
              placeholder="amount without R"
              value={price}
                  onChange={this.handleChange} />
            </FormGroup>
</Col>

            </Row>
          
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="fuel">Select Fuel Type</Label>
                  <Input
                    type="select"
                    name="fuel"
                    id="fuel"
                    value={fuel}
                    onChange={this.handleChange}
                    >
                      <option>select</option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                  </Input>
            </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="year">Model Year</Label>
                  <Input 
                  type="text" 
                  name="year" 
                  id="year"
                  value={year}
                    onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="seats">Seating Capacity</Label>
                  <Input 
                  type="text" 
                  name="seats" 
                  id="seats" 
                  value={seats}
                    onChange={this.handleChange}/>
                </FormGroup>
              </Col>
            </Row>
            <Button color="primary">ADD CAR</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
};
export default connect()(CarForm);