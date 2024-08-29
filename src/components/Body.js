import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

// import { useDispatch } from 'react-redux'
// import { addUser, removeUser } from '../utils/userSlice'

// import { useNavigate  } from 'react-router-dom'




const Body = () => {


 
  
   
 




  return (
   
    <div className=''>
        <main 
        className='relative w-full min-h-screen 
        bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg)] bg-cover bg-center'>

        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)]  via-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.9)]" >

       
      
        <section className='w-[100%] mt-2 md:w-[85%] mx-auto '>
           <Header/>
           
           <Outlet/>
           {/* <LandingPage/> */}
           {/* <SignIn/> */}

        </section>  
     
            
        </div> 
        </main>
     </div>
  
  )
}

export default Body