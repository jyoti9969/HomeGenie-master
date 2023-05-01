import React from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';

const UserDetail = (props) => {
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const saveAndContinue = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <>
    <Container className='  my-4 border-2 border-gray-800 w-50' style={{marginLeft:"20em"}}  >
    <div className='float-left pr-8 pt-4 flex   '>
    <div > <img className='h-6' src="https://as2.ftcdn.net/v2/jpg/00/97/00/07/1000_F_97000769_R4zepLTgmf8G22W7G2o8JA1HeiVK2CkK.jpg" alt="/home" /> </div>
	<div><span >| Home Genie</span></div>
	</div>

      <Form className='mt-8 pt-8'>
        <div>
        <Row>
          <Form.Group as={Col} controlId="formFirstName" >
            <Form.Label className="label">First Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={props.inputValues.firstName}
              name="firstName"
              required
              onChange={props.handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formLastName">
            <Form.Label className="label">Last Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={props.inputValues.lastName}
              name="lastName"
              required
              onChange={props.handleChange}
            />
          </Form.Group>
          </Row>
        </div>

        <Form.Group controlId="formEmail">
          <Form.Label className="label">Email Address</Form.Label>
          <Form.Control
            type="email"
            defaultValue={props.inputValues.email}
            name="email"
            required
            onChange={props.handleChange}
          />
        </Form.Group>
        <Row>
          <Form.Group as={Col} controlId="formFirstName" >
            <Form.Label className="label">Mobile Number</Form.Label>
            <Form.Control
              type="text"
              defaultValue={props.inputValues.mobile}
              name="mobile"
              required
              onChange={props.handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formLastName">
            <Form.Label className="label">Landline Number</Form.Label>
            <Form.Control
              type="text"
              defaultValue={props.inputValues.landline}
              name="landline"
              required
              onChange={props.handleChange}
            />
          </Form.Group>
          </Row>
        <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={props.inputValues.address}
                        name="address"
                        required
                        onChange={props.handleChange}
                     
                    />
                </Form.Group>

                <Row>
                    <Form.Group as={Col} controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={props.inputValues.city}
                            name="city"
                            required
                            onChange={props.handleChange}
                           
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" name="state" defaultValue={props.inputValues.state}   onChange={props.handleChange} >
                            <option value="Delhi">Delhi</option>
                            <option value="gurugram">Gurugram</option>
                            <option value="bengalore">Bengalore</option>
                            <option value="hydrabad">Hydrabad</option>
                           
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={props.inputValues.zip}
                            name="zip"
                            required
                            onChange={props.handleChange}
                        />
                    </Form.Group>
                </Row>
        <Button variant="primary" onClick={saveAndContinue} className='my-4'>
          Next &#8680; 
        </Button>
      </Form>
    </Container>
    </>
  );
}
export default UserDetail;