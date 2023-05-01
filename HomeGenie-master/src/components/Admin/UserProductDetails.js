import React from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';

const UserProductDetails = ({ inputValues, handleChange, prevStep, nextStep }) => {

    const back = (e) => {
        e.preventDefault();
        prevStep();
    };

    const saveAndContinue = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <Container className='  my-4 border-2 border-gray-800 w-50' style={{marginLeft:"20em"}}>
          <div className='float-left pr-8 pt-4 flex   '>
    <div > <img className='h-6' src="https://as2.ftcdn.net/v2/jpg/00/97/00/07/1000_F_97000769_R4zepLTgmf8G22W7G2o8JA1HeiVK2CkK.jpg" alt="/home" /> </div>
	<div><span >| Home Genie</span></div>
	</div>
            <Form className='mt-8 pt-8'>
                <Form.Group controlId="formDescription">
                    <Form.Label>Description of House</Form.Label>
                    <Form.Control  as="textarea" rows={3}
                        type="text"
                        defaultValue={inputValues.description}
                        name="description"
                        required
                        onChange={handleChange}
                    />
                </Form.Group>

                <Row className='my-4'>
                <Form.Group as={Col} controlId="formNumberRoom">
                        <Form.Label>No. of Rooms</Form.Label>
                        <Form.Control as="select" name="numberRoom" defaultValue={inputValues.numberRoom} onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                           
                        </Form.Control>
                        </Form.Group>

                    <Form.Group as={Col} controlId="formNumberBeds">
                        <Form.Label>No. of Beds</Form.Label>
                        <Form.Control as="select" name="numberBeds" defaultValue={inputValues.numberBeds} onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                           
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formTypeRoom">
                        <Form.Label>Rooms per person</Form.Label>
                        <Form.Control as="select" name="roomSharing" defaultValue={inputValues.roomSharing} onChange={handleChange}>
                            <option value="Single Room Sharing">Single Room Sharing</option>
                            <option value="Multiple Room Sharing">Multiple Room Sharing</option>
                            <option value="Triple Room Sharing">Triple Room Sharing</option>
                           
                           
                        </Form.Control>
                    </Form.Group>
                   
                </Row>
                <Row className='my-4'>
                

                    <Form.Group as={Col} controlId="formSinglePrice">
                        <Form.Label>Single Room Price</Form.Label>
                        <Form.Control type="text" name="singlePrice"
                         defaultValue={inputValues.singlePrice} onChange={handleChange}>          
                        </Form.Control>
                    </Form.Group>
                   
                    <Form.Group as={Col} controlId="formMultiplePrice">
                        <Form.Label>Multiple Room Price</Form.Label>
                        <Form.Control type="text" name="multiplePrice" 
                        defaultValue={inputValues.multiplePrice} onChange={handleChange} 

                        />     
                       
                    </Form.Group>
                    <Form.Group as={Col} controlId="formTriplePrice">
                        <Form.Label>Triple Room Price</Form.Label>
                        <Form.Control type="text" name="triplePrice" 
                        required 
                         defaultValue={inputValues.triplePrice} 
                         onChange={handleChange} />     
                        
                    </Form.Group>
                    
                </Row>
                <Row>
                <Form.Group as={Col} controlId="formFoodAvailable">
                        <Form.Label>Food Available</Form.Label>
                        <Form.Control as="select" name="foodAvailable" defaultValue={inputValues.foodAvailable} onChange={handleChange}>
                            <option value="Yes">yes available</option>
                            <option value="No">not available</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formfile">
                        <Form.Label>Default file input example</Form.Label>
                         <Form.Control type="file" name="images" defaultValue={inputValues.images} onChange={handleChange }  />
                        </Form.Group>
                        </Row>

                <Button variant="secondary" className='my-4' onClick={back}>Back</Button>{' '}
                <Button variant="primary" className='my-4' onClick={saveAndContinue}>Next</Button>
            </Form>
        </Container>
    );
};

export default UserProductDetails;