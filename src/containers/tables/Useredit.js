import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardHeader } from 'reactstrap';
import axios from 'axios';
import { userActions } from '../../_actions/user.action';
import { connect } from 'react-redux';
class Useredit extends Component {
    constructor(props) {
        super(props);



        this.state = {
            userid:'',
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            birth_date: '',
            driversLicense: '',
            address: '',
            city: '',
            country: '',
            gender: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'));
        let Authorization = 'Bearer ' + user.data.token;
        const { id } = this.props.match.params
        console.log( id )
        axios.get(`http://localhost:8080/customers/${id}`, {
            headers: { Authorization: Authorization }
        }).then(res => {
            const user = res.data;
            const cdate = user.birth_date;
            console.log(user);
            console.log( cdate.split('T')[0]);
            this.setState({
                userid: id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                contact: user.contact,
                birth_date: cdate,
                driversLicense: user.driversLicense,
                address: user.address,
                city: user.city,
                country: user.country,
                gender: user.gender,
            }


            );
            console.log( this.state.userid);
          
        });
    }
        handleChange(e) {
            const { name, value } = e.target;
            this.setState({ [name]: value });
        }

        handleSubmit(e) {
            e.preventDefault();

            const { userid,firstName, lastName, email, contact, birth_date, gender, driversLicense, address, city, country } = this.state;
            const { dispatch } = this.props;
            const user = { userid, firstName, lastName, email, contact, birth_date, gender, driversLicense, address, city, country }
            if (user) {
               dispatch( userActions.update(user));
                console.log(user);
            }
        }

        render(){
            const { firstName, lastName, email, contact, birth_date, gender, driversLicense, address, city, country, submitted } = this.state;
            return (
                <Card>
                    <CardHeader>Update</CardHeader>
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
                                        value={birth_date.split('T')[0]}
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
                                    <Button color="warning">Update</Button>
                                    
                                </Col>
                            </FormGroup>

                        </Form>
                    </CardBody>
                </Card>
            );
        }
    };
    export default connect()(Useredit);