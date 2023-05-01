import React from 'react'
import { Link } from "react-router-dom";
const ViewDetail = () => {
  return (
    <div className='flex justify-center mb-5'>
     <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded ">
     <Link to="/list" className=" text-white decoration-transparent">View More &#8680;     </Link>
                    
                </button>
               
    </div>
  )
}

export default ViewDetail
