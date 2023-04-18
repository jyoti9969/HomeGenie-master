import React from 'react'
import Details from './Details'
import Navigation from '../Layouts/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import Footer from '../Layouts/Footer';

const Lists = () => {
  return (
    <div>
    <Navigation />
    <div className=' flex-column  ' style={{marginLeft:"10rem"}}>
<div><Details /></div>
<div><Details /></div>
<div><Details /></div>
<div><Details /></div>
     
       </div>
       <Footer/>
    </div>
  )
}

export default Lists
