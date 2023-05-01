import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import Table from 'react-bootstrap/Table';

const MyListBar = () => {
  return (
    <div>
      
      <div className="flex justify-center items-center my-6  w-75 ">
       
       <Carousel className="w-1/2  ">
           <Carousel.Item>
               <img
                   className="d-block w-100"
                   src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/Mar/31/Photo_h400_w540/GR2-361003-1707841_400_540.jpg"
                   alt="First slide"
               />
           </Carousel.Item>
           <Carousel.Item>
               <img
                   className="d-block w-100"
                   src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/Mar/31/Photo_h400_w540/GR2-361003-1707861_400_540.jpg"
                   alt="Second slide"
               />
           </Carousel.Item>
           <Carousel.Item>
               <img
                   className="d-block w-100"
                   src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/Mar/31/Photo_h400_w540/GR2-361003-1707851_400_540.jpg"
                   alt="Third slide"
               />
           </Carousel.Item>
       </Carousel>
       <div className="w-1/2 border rounded-lg p-6" >
      
           <div className="flex justify-between mb-2">
          
               <span>&#8377; 10000/month</span>
               <span className="font-bold text-gray-600 mr-2">Beds available:</span>
               <span>Food extra charge</span>
           </div>

           <div className="flex justify-between mb-2">
               <span className="font-bold text-gray-600 mr-2">Address:</span>
               <span>123 Main St, San Francisco, CA 94110</span>
           </div>
           <p>Move into Covie Bannerghatta 185,  Located in a safe neighborhood, Read more</p>
           <div className="flex justify-between mb-2">
               <span className="font-bold text-gray-600 mr-2">Bed Type:</span>
           </div>
           <div>
               <Table striped="columns">
                   <thead>
                       <tr>
                           <th>Single Room</th>
                           <th>Twin Sharing</th>
                           <th>Multiple Sharing</th>

                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>&#8377;10,000</td>
                           <td>&#8377;7000</td>
                           <td>&#8377;5000</td>

                       </tr>


                   </tbody>
               </Table>
           </div>
           <div className='flex justify-around'>
               <button className="d py-2 px-4 rounded border bg-blue-500  text-white  ">
                   <b>Edit  &#x270E;</b> 
               </button>
               <button className=" py-2 px-4 rounded border text-white bg-red-700 ">
                  <b>Delete  &#x2716;</b> 
               </button>
           </div>
       </div>
   </div>
    </div>
  )
}

export default MyListBar
