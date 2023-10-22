import React from 'react'
import fb from './Assest/fb.png'
import './App.css'
import 'font-awesome/css/font-awesome.min.css';
import  {useSelector}  from 'react-redux';

//importing icons
import {BsSearch, BsHouseDoor, BsFlag, BsCollectionPlay, BsShopWindow, BsPeople, BsPersonCircle, BsMessenger, BsBell, BsPower} from 'react-icons/bs'
import {AiOutlinePlus} from "react-icons/ai";

import {Link} from 'react-router-dom'




export default function Header() {
  const user = useSelector((state) => state.user.value)


 
  return (
    
    <div className=" p-1 d-flex bg-white justify-content-between">
    
      <div className="d-flex align-items-center">
        <img 
            src={fb} 
            alt="fb icon"
            width={60}
            height={55} />
      

        <div className="search-container d-flex align-items-center my-3 p-1 br-20">
          <BsSearch className="ms-1 me-1" />
          <input type="search" placeholder="search on facebook" className="search-box mx-0 " />
        </div>
      </div>
      
      <div>
        <div className="d-flex menu cursor-pointer">

            <div className="active">
              <Link to="/Dashboard">
              <BsHouseDoor/>
              </Link>
            </div>

            <div>
            <BsFlag/>
            </div>
            <div>
            <BsCollectionPlay/>
            </div>
            <div>
              <BsShopWindow/>
            </div>
            <div>
              <BsPeople/>
            </div>
        </div>
    </div>


      <div className="profile d-flex align-items-center" >
          <div>
              <BsPersonCircle/>
            </div>
            <span className="username ms-1" >{user.displayName}</span>
            <div>
              <AiOutlinePlus/>
            </div>

            <div>
              <Link to="/Msg">
              <BsMessenger />
              </Link>
            </div>
           
           <div>
              <Link to="/Notify">
              <BsBell /> 
              </Link>
           </div>
            
            <div  className="cursor-poineter" >
              <button type="button" className='btn bg-white'  title="Logout" >
                <BsPower/>
              </button>
            </div>
      </div> 
        
    </div>
  )
}








