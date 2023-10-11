import React from 'react'
import { BsHouseDoor, BsFlag, BsCollectionPlay, BsShopWindow, BsMessenger} from 'react-icons/bs'
import {AiOutlinePlusSquare} from "react-icons/ai"
import {TbBrandMessenger} from 'react-icons/tb'

function menu() {
  return (
    <div className="content-left mb-20">
        <div className="d-flex align-items-center">
            <img 
            src="https://i.pinimg.com/1200x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg" 
            alt="profile" 
            width={40} 
            height={40} 
            className='ms-3 br-20 me-2'
            />
        <b>Renu</b>
        </div>

        <div >
            <div className="d-flex align-items-center content-l-menu" >
              <AiOutlinePlusSquare className="content-left-svg"/>
              <b>Covid-19 information center</b>
            </div>
            <div className="d-flex align-items-center content-l-menu" >
              <BsHouseDoor className="content-left-svg"/>
              <b>Pages</b>
            </div>
            <div className="d-flex align-items-center content-l-menu" >
            <BsFlag className="content-left-svg"/>
            <b>Friends</b>
            </div>
            <div className="d-flex align-items-center content-l-menu" >
              <TbBrandMessenger className="content-left-svg"/>
              <b>Messenger</b>
            </div>
            <div className="d-flex align-items-center content-l-menu" >
              <BsShopWindow className="content-left-svg"/>
              <b>MarketPlace</b>
            </div>
            <div className="d-flex align-items-center content-l-menu">
            <BsCollectionPlay className="content-left-svg"/>
            <b>Videos</b>
            </div>
        </div>
    </div>
  )
}

export default menu