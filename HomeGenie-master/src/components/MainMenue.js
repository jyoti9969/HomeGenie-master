import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import {Link} from 'react-router-dom'

const MainMenue=()=>{
    return(
<>
<div className="bg-gray-800 w-100 " style={{height:"40.5em"}}>

<div className=' absolute h-10 w-100 flex  ' style={{marginTop:"10%"}}>

	<div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto  shadow-md p-2 opacity-100  ">
<div className="border-2 border-x-2 border-t-0  border-gray-800">
	<div className='float-right pr-8 pt-4 flex  '>	
    <div > <img className='h-6' src="https://as2.ftcdn.net/v2/jpg/00/97/00/07/1000_F_97000769_R4zepLTgmf8G22W7G2o8JA1HeiVK2CkK.jpg" alt="/home" /> </div>
	<div><span >| Home Genie</span></div>
	</div>
  
            <div className="py-8 px-8 rounded-xl">
            <div className='flex justify-center mt-5'>
    <img src="/logo.jpg" alt="/logo" className="border-2 border-gray-800 rounded-circle" style={{height:"10em"}} />
  </div>
               
                <button className="block text-center bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full mt-4"><Link to="/admin" className=' text-white decoration-transparent'>Want to Sale Home?</Link></button>
                    <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full mt-2"><Link to="/homepage" className=' text-white decoration-transparent'>Looking for Home</Link></button>
                


            </div>
        </div>
        </div>
        </div>
        </div>
        
</>
    )
}
export default MainMenue