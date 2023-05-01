import React, { useState } from 'react';
import UserDetail from './UserDetail';
import UserProductDetails from "./UserProductDetails";
import Confirmation from "./Confirmation";
import { Form, Button, Col, Container } from 'react-bootstrap';

const AdminHome = () => {
const [step, setStep] = useState(1);
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [state, setState] = useState('');
const [zip, setZip] = useState('');
const [mobile, setMobile] = useState('');
const [landline, setLandline] = useState('');
const [foodAvailable, setFoodAvailable] = useState('');
const [singlePrice, setSinglePrice] = useState('');
const [multiplePrice, setMultiplePrice] = useState('');
const [triplePrice, setTriplePrice] = useState('');
const [description, setDescription] = useState('');
const [numberRoom, setNumberRoom] = useState('');
const [numberBeds, setNumberBeds] = useState('');
const [roomSharing, setRoomSharing] = useState('');
const [images, setImages] = useState('');
const inputValues = { firstName, lastName, email, address, city, state, zip ,mobile,landline,foodAvailable,singlePrice,multiplePrice,
triplePrice,description,numberRoom,numberBeds,roomSharing,images};

const nextStep = () => {
setStep(step + 1);
};

const prevStep = () => {
setStep(step - 1);
};

const handleChange = (event) => {
const { name, value } = event.target;
switch (name) {
case 'firstName':
setFirstName(value);
break;
case 'lastName':
setLastName(value);
break;
case 'email':
setEmail(value);
break;
case 'address':
setAddress(value);
break;
case 'city':
setCity(value);
break;
case 'mobile':
  setMobile(value);
  break;
  case 'landline':
    setLandline(value);
case 'state':
setState(value);
break;
case 'zip':
setZip(value);
break;

case 'foodAvailable':
setFoodAvailable(value);
break;
case 'singlePrice':
setSinglePrice(value);
break;
case 'multiplePrice':
setMultiplePrice(value);
break;
case 'triplePrice':
setTriplePrice(value);
break;
case 'numberRoom':
setNumberRoom(value);
break;

case 'numberBeds':
setNumberBeds(value);
break;
case 'roomSharing':
setRoomSharing(value);
break;
case 'description':
setDescription(value);
break;
case 'images':
setImages(value);
break;
default:
break;
}
};

switch (step) {
case 1:
return (
<UserDetail
       nextStep={nextStep}
       handleChange={handleChange}
       inputValues={inputValues}
     />
);
case 2:
return (
<UserProductDetails
       nextStep={nextStep}
       prevStep={prevStep}
       handleChange={handleChange}
       inputValues={inputValues}
     />
);
case 3:
return (
<Confirmation
       nextStep={nextStep}
       prevStep={prevStep}
       inputValues={inputValues}
     />
);
default:
return null;
}
};

export default AdminHome;