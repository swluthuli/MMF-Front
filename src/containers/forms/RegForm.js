import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Card, CardBody, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';
import { userActions } from '../../_actions/user.action';
class RegForm extends React.Component {

  constructor(props) {
    super(props);



    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      birth_date: '',
      driversLicense: '',
      identity:  '',
      address: '',
      city: '',
      country: '',
      gender:'',
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

    const { firstName, lastName, email, contact, birth_date,gender, driversLicense,identity, address, city, country } = this.state;
    const { dispatch } = this.props;
    const user = { firstName, lastName, email, contact, birth_date,gender, driversLicense,identity, address, city, country }
    if (user) {
      dispatch(userActions.register(user));
      console.log(user);
    }
  }



  render() {

    const { firstName, lastName, email, contact, birth_date,gender, driversLicense,identity, address, city, country, submitted } = this.state;

    return (
      <Card>
        <CardHeader>Register</CardHeader>
        <CardBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label for="firstName" sm={2}>First Name</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="John"
                  value={firstName}
                  onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lastName" sm={2}>Last Name</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Doe"
                  value={lastName}
                  onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" sm={2}>Email</Label>
              <Col sm={10}>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@example.com "
                  value={email}
                  onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="contact" sm={2}>Contact no</Label>
              <Col sm={10}>
                <Input
                  type="tel"
                  name="contact"
                  id="contact"
                  placeholder="07123456789"
                  value={contact}
                  onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="birth_date" sm={2}>Date Of Birth</Label>
              <Col sm={10}>
                <Input
                  type="date"
                  name="birth_date"
                  id="birth_date"
                  value={birth_date}
                  onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="gender" sm={2}>Gender</Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="gender"
                  id="gender"
                  value={gender}
                  onChange={this.handleChange} >
                    <option>select</option>
                  <option>M</option>
                  <option>F</option>
                  </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="driversLicense" sm={2}>Drivers License no</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="driversLicense"
                  id="driversLicense"
                  value={driversLicense}
                  onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="identity" sm={2}>ID Number</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="identity"
                  id="identity"
                  value={identity}
                  onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="address" sm={2}>Address</Label>
              <Col sm={10}>
                <Input
                  type="textarea"
                  name="address"
                  id="address"
                  value={address}
                  onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="city" sm={2}>City</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  value={city}
                  onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="country" sm={2}>Country</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="country"
                  id="country"
                  value={country}
                  onChange={this.handleChange} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="country" sm={2}></Label>
              <Col sm={10}>
                <Button color="primary">Register</Button>
              </Col>
            </FormGroup>

          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default connect()(RegForm)