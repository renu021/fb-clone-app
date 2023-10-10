import React from 'react'
import fb from './Assest/fb.png'
import './App.css'
import 'font-awesome/css/font-awesome.min.css';
import {BsSearch} from 'react-icons/bs'


export default function Header() {
  return (
    
    <div className="p-1 d-flex bg-white">
      <div className="d-flex align-items-center">
        <img 
            src={fb} 
            alt="fb icon"
            width={60}
            height={55} />
      

      <div className="search-container d-flex align-items-center my-3 p-1">
        <BsSearch/>
        <input type="search" placeholder="search on facebook" className="search-box mx-0" />
      </div>
      </div>
        
    </div>
  )
}

