import { Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
const Confirmation = (props) => {
    const { inputValues: { firstName, lastName, email, address, city, state, zip, mobile, landline, foodAvailable, singlePrice, multiplePrice,
        triplePrice, description, numberRoom, numberBeds, roomSharing, images } } = props;

    const back = (e) => {
        e.preventDefault();
        props.prevStep();
    };

    const  navigate=useNavigate();
    const saveAndContinue = (e) => {
        e.preventDefault();
        props.nextStep();
        navigate("/my-list")
    };

    return (
        <Container className='my-4   border-2 border-gray-800 w-50 ' style={{marginLeft:"20em"}}>
            <div className='float-left pr-8 pt-4 flex   '>
                <div > <img className='h-6' src="https://as2.ftcdn.net/v2/jpg/00/97/00/07/1000_F_97000769_R4zepLTgmf8G22W7G2o8JA1HeiVK2CkK.jpg" alt="/home" /> </div>
                <div><span >| Home Genie</span></div>
            </div>
            <br /><br />

            <div className='d-flex justify-content-evenly  mt-2'>

                <table class="table">
                    <thead>
                        <tr>
                            <th colspan="2" scope="col">confirm your details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">First Name:</td>
                            <td> {firstName}</td>
                        </tr>
                        <tr>
                            <td scope="row">Last Name: </td>
                            <td>{lastName}</td>
                        </tr>
                        <tr>
                            <td scope="row">Email:</td>
                            <td >{email}</td>
                        </tr>
                        <tr>
                            <td scope="row">Adress:</td>
                            <td >{address}</td>
                        </tr>
                        <tr>
                            <td scope="row">City:</td>
                            <td >{city}</td>
                        </tr>
                        <tr>
                            <td scope="row">State:</td>
                            <td >{state}</td>
                        </tr>
                        <tr>
                            <td scope="row">Zip:</td>
                            <td >{zip}</td>
                        </tr>
                        <tr>
                            <td scope="row">Mobile:</td>
                            <td >{mobile}</td>
                        </tr>
                        <tr>
                            <td scope="row">Landline:</td>
                            <td >{landline}</td>
                        </tr>
                        <tr>
                            <td scope="row">foodAvailable:</td>
                            <td >{foodAvailable}</td>
                        </tr>
                        <tr>
                            <td scope="row">single room Price:</td>
                            <td >{singlePrice}</td>
                        </tr>
                        <tr>
                            <td scope="row">multiple room Price:</td>
                            <td >{multiplePrice}</td>
                        </tr>
                        <tr>
                            <td scope="row">triple room Price:</td>
                            <td >{triplePrice}</td>
                        </tr>
                        <tr>
                            <td scope="row">numberRoom:</td>
                            <td >{numberRoom}</td>
                        </tr>
                        <tr>
                            <td scope="row">number of beds available:</td>
                            <td >{numberBeds}</td>
                        </tr>
                        <tr>
                            <td scope="row">roomSharing:</td>
                            <td >{roomSharing}</td>
                        </tr>
                        <tr>
                            <td scope="row">Description:</td>
                            <td >{description}</td>
                        </tr>
                        <tr>
                            <td scope="row">Images :</td>
                            <td >{images}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className='my-4'>
            <Button variant="secondary" onClick={back}>Back</Button>{' '}
            <Button variant="primary" onClick={saveAndContinue}>Confirm</Button>
            </div>

        </Container>
    );
}

export default Confirmation;