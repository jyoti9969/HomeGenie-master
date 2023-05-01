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
const SignIn = () => {
  return (
    <div className="bg-gray-800 w-100 " style={{height:"40.5em"}}>
    <div className=' absolute flex mt-16  p-2 ' style={{marginLeft:"30%"}}>  
    <div className="border-2 border-x-2 border-t-0 border-b-0 border-gray-800 p-2">
      <CDBCard style={{ width: "30rem" }}>
      <div className='float-right pr-8 pt-4 flex   '>
    <div > <img className='h-6' src="https://as2.ftcdn.net/v2/jpg/00/97/00/07/1000_F_97000769_R4zepLTgmf8G22W7G2o8JA1HeiVK2CkK.jpg" alt="/home" /> </div>
	<div><span >| Home Genie</span></div>
	</div>
  <br />
        <CDBCardBody className="mx-4 ">
          <div className="text-center mt-6 mb-2">
              <p className="h4"> Sign in </p>
          </div>
          <CDBInput material placeholder="E-mail" type="email" className=" mb-4" />
          <CDBInput material placeholder="Password" type="password" className=" mb-4" />
          <div
              className="flex flex-wrap justify-between align-items-center"
          >
              <span className='flex'><input type="Checkbox" />
              <p className="m-0">Remember me</p></span>
              <Link to="#">Forgot Password ?</Link>
          </div>
          <CDBBtn 
              color="dark"
              className="btn-block my-3 mx-0" >
             <Link to="/homepage" className='text-white decoration-transparent'>Sign in</Link> 
          </CDBBtn>
          <p className="text-center">Not a member?
            <Link className="d-inline p-0 " to="/sign-up">
              Sign-Up
            </Link>
          </p>
          <p className="text-center"> or sign in with</p>
          <div className="my-3 flex justify-center">
            <CDBBtn
                color="white"
                style={{ boxShadow: "none" }}
            >
                <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn
                color="white"
                className="m-0"
                style={{ boxShadow: "none" }}
            >
                <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn
                color="white"
                style={{ boxShadow: "none" }}
            >
                <CDBIcon fab icon="google-plus-g" />
            </CDBBtn>
          </div>
        </CDBCardBody>
      </CDBCard>
    </div>
    </div>
    </div>
  )
}

export default SignIn
