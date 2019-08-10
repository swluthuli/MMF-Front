import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardHeader,InputGroup, InputGroupAddon, InputGroupText, } from 'reactstrap';
import axios from 'axios';
import { bookingActions } from '../../_actions/booking.action';
import { connect } from 'react-redux';
import {Document, Page , Text , View, StyleSheet, PDFViewer} from '@react-pdf/renderer';
class Edit extends Component {

    constructor(props) {
        super(props);



        this.state = {
            car_name: '',
            year: '',
            fuel: '',
            price:'',
            pickup: '',
            PickDate: '',
            returnLocation: '',
            returnDate: '',
            title: '',
            firstName: '',
            lastName: '',
            email: '',
            contact_number: '',
            identity: '',
            submitted: false

        };


    }
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'));
        let Authorization = 'Bearer ' + user.data.token;
        const { id } = this.props.match.params
        console.log({ id })
        axios.get(`http://localhost:4000/cars/${id}`, {
            headers: { Authorization: Authorization }
        }).then(res => {
            const car = res.data;

            this.setState({

                car_name: car.name,
                year: car.year,
                fuel: car.fuel,
                price: car.price,
                pickup: 'Richardsbay',
                PickDate: '',
                returnLocation: 'Richardsbay',
                returnDate: '',
                title: '',
                firstName: '',
                lastName: '',
                email: '',
                contact_number: '',
                identity: '',
                submitted: false
            }


            );
            console.log(this.state.price);
        })
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.search = this.search.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit(e) {
        e.preventDefault();
    
        const { car_name, year, fuel, pickup, PickDate, returnLocation, returnDate, title, firstName, lastName, email, contact_number, identity  } = this.state;
        const { dispatch } = this.props;
        const booking = { car_name, year, fuel,pickup, PickDate, returnLocation, returnDate, title, firstName, lastName, email, contact_number, identity  }
        if (booking) {
          dispatch(bookingActions.register(booking));
          this.setState({
              submitted : true
          });
         
        }
      }
      search(e){
          e.preventDefault();
          console.log('result');
      }





    render() {
        const { car_name, year, fuel, pickup, PickDate, returnLocation, returnDate, title, firstName, lastName, email, contact_number, identity ,submitted } = this.state;
const style = StyleSheet.create({
    page:{
        flexDirection: "column"
    },
    section:{
        flexGrow: 1
    }
});
        return (!submitted ? <div>
            <Card>
                <CardHeader>Book    <Form inline className="float-right">
                <InputGroup>
        <Input placeholder="search" />
        <InputGroupAddon addonType="append" >
          <InputGroupText ><i className="fa fa-search" onClick={this.search}></i></InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      </Form></CardHeader>
                <CardBody>
                    <Form onSubmit={this.handleSubmit}>


                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="car_name">Selected Car</Label>
                                    <Input
                                        type="text"
                                        name="car_name"
                                        id="car_name"
                                        value={car_name}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4} >
                                <FormGroup>
                                    <Label for="year">Model Year</Label>
                                    <Input
                                        type="text"
                                        name="year"
                                        id="year"
                                        value={year}
                                        onChange={this.handleChange}

                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="fuel">Fuel Type</Label>
                                    <Input
                                        type="text"
                                        name="fuel"
                                        id="fuel"
                                        value={fuel}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>



                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="pickup">Pick-up Location</Label>
                                    <Input
                                        type="text"
                                        name="pickup"
                                        id="pickup"
                                        value={pickup}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4} >
                                <FormGroup>
                                    <Label for="PickDate">Pick-up Date</Label>
                                    <Input
                                        type="date"
                                        name="PickDate"
                                        id="PickDate"
                                        value={PickDate}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="returnLocation">Return Location</Label>
                                    <Input
                                        type="text"
                                        name="returnLocation"
                                        id="returnLocation"
                                        value={returnLocation}
                                        onChange={this.handleChange}

                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="returnDate">Return Date</Label>
                                    <Input
                                        type="date"
                                        name="returnDate"
                                        id="returnDate"
                                        value={returnDate}
                                        onChange={this.handleChange}

                                    />
                                </FormGroup>
                            </Col>
                        </Row>


                        <Row form>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="title">Title</Label>
                                    <Input
                                        type="select"
                                        name="title"
                                        id="title"
                                        value={title}
                                        onChange={this.handleChange}

                                    >
                                        <option>select</option>
                                        <option>Mr</option>
                                        <option>Dr</option>
                                        <option>Miss</option>
                                        <option>Mrs</option>
                                        <option>Rev</option>

                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={6} >
                                <FormGroup>
                                    <Label for="firstName">First Name</Label>
                                    <Input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        value={firstName}
                                        onChange={this.handleChange}

                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="lastName">Last Name</Label>
                                    <Input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        value={lastName}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>



                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={this.handleChange}

                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6} >
                                <FormGroup>
                                    <Label for="contact_number">Contact Number</Label>
                                    <Input
                                        type="text"
                                        name="contact_number"
                                        id="contact_number"
                                        value={contact_number}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>


                        <FormGroup>
                            <Label for="identity">ID Number</Label>
                            <Input
                                type="text"
                                name="identity"
                                id="identity"
                                value={identity}
                                onChange={this.handleChange}

                            />
                        </FormGroup>


                        <Button color="primary">Book</Button>
                    </Form>
                </CardBody>
            </Card>
        </div>:
        <Card >
        <PDFViewer style={{minHeight:'684px'}}>
            <Document>
            <Page size="A4" style={style.page}>
            <View style={style.section}>
                <Text>Thank you for your reservation and choosing MFF TOUR</Text>
                <Text>Personal Details</Text>
                <Text>Full Name : {title}  {firstName} {lastName}</Text>
            </View>
            </Page>
            </Document>

        </PDFViewer>
        </Card>);


    }
};
function mapStateToProps({ users }) {
    return {
        users
    }
  };
export default connect(mapStateToProps)(Edit); 