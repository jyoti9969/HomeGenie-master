import React from 'react'
import {Link} from 'react-router-dom'
import {
    CDBInput,
    CDBCard,
    CDBCardBody,
    CDBIcon,
    CDBBtn,
    CDBLink,
    CDBContainer } from "cdbreact";
  
const SignUp = () => {
  return (
    <div className="bg-gray-800 w-100  p-4" style={{height:"auto"}}>
    <div className='flex justify-center'>
    <div>

    <CDBContainer className='mt-9 '>
    
    <CDBCard style={{ width: "30rem" }}>
    <div className='float-right pr-8 pt-4 flex  '>
    <div > <img className='h-6' src="https://as2.ftcdn.net/v2/jpg/00/97/00/07/1000_F_97000769_R4zepLTgmf8G22W7G2o8JA1HeiVK2CkK.jpg" alt="/home" /> </div>
	<div><span >| Home Genie</span></div>
	</div>
      <CDBCardBody className="mx-4 ">
<br/>
        <div className="text-center mt-9 mb-2">
          <p className="h4"> Sign up </p>
        </div>
        <div className="flex my-4 ">
          <div className="mr-6">
            <CDBInput material placeholder="First name" type="text" />
          </div>
          <div className="ml-3">
            <CDBInput material placeholder="Last name" type="text" />
          </div>
        </div>
        <CDBInput material placeholder="E-mail" type="email mb-3" />
        <p className="text-muted text-center small mt-4">
          At least 8 characters and 1 digit
        </p>
        <CDBInput material placeholder="Password" type="password" className='mb-4' />
        <CDBInput material placeholder="Phone number" type="text" />
        <p className="text-muted text-center small mt-4">
          Optional - for two step authentication
        </p>
        <div
          className="d-flex justify-content-center align-items-center mt-4"
        >
          <CDBInput type="Forms" />
          <p className="ml-4">Subscribe to our newsletter</p>
        </div>
        <CDBBtn
          color="dark"
          className="btn-block my-3 mx-0 bg-gray-800"
        >
              <Link to="/homepage" className='text-white decoration-transparent'>Sign Up</Link> 
        </CDBBtn>
        <p className="text-center"> or sign up with</p>
        <div className=" mb-3 flex justify-center">
          <CDBBtn
            color="white"
            className="m-0"
            style={{boxShadow:"none"}}
          >
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn
            color="white"
            className="m-0"
            style={{boxShadow:"none"}}
          >
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn
            color="white"
            className="m-0"
            style={{boxShadow:"none"}}
          >
            <CDBIcon fab icon="google-plus-g"/>
          </CDBBtn>
        </div>
          <p className="text-center m-0">
            Already have an account?
            <CDBLink className="d-inline p-0 " to="#">
             <Link to="/sign-in">Sign In</Link> 
            </CDBLink>
          </p>
        <hr/>
        <p className="text-center">
          By clicking <em>Sign up</em> you agree to our 
          <CDBLink className="d-inline p-0" to="#">
             <Link>terms of service</Link>
          </CDBLink>
        </p>
      </CDBCardBody>
    </CDBCard>
  </CDBContainer>
  </div>
  </div>
  </div>
  )
}

export default SignUp
