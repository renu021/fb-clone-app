import React from 'react'
import { BsHouseDoor, BsFlag, BsCollectionPlay, BsShopWindow} from 'react-icons/bs'
import {AiOutlinePlusSquare} from "react-icons/ai"
import {TbBrandMessenger} from 'react-icons/tb'
import { useSelector } from 'react-redux';



export default function Menu() {
const user = useSelector((state) => state.user.value)

  return (
    <div className="content-left mb-20">
        <div className="d-flex align-items-center">
            <img 
            src={user.photoUrl} 
            // scr={user.profileImage}
            alt="profile" 
            width={40} 
            height={40} 
            className='ms-3 br-20 me-2'
            />
        {/* <b>Renu</b> */}
        <span className="username ms-1" >{user.displayName}</span>
        </div>

        <div >
            <div className="d-flex align-items-center content-l-menu" >
            <button style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <AiOutlinePlusSquare className="content-left-svg"/>
              Covid-19 information center
              </button>
            </div>

            <div className="d-flex align-items-center content-l-menu" >
            <button style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <BsHouseDoor className="content-left-svg"/>
              Pages
              </button>
            </div>

            <div className="d-flex align-items-center content-l-menu" >
            <button style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
               <BsFlag className="content-left-svg"/>
               Friends
              </button>
            </div>

            <div className="d-flex align-items-center content-l-menu" >
            <button style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <TbBrandMessenger className="content-left-svg" />
              Messenger
            </button>
            </div>

            <div className="d-flex align-items-center content-l-menu" >
            <button style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <BsShopWindow className="content-left-svg"/>
              MarketPlace
              </button>
            </div>

            <div className="d-flex align-items-center content-l-menu">
            <button style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <BsCollectionPlay className="content-left-svg"/>
              Videos
              </button>
            </div>

            <div className="d-flex align-items-center content-l-menu ">
               <b className="see-more">See More</b>
            </div>
           <hr/>



        <div className="testing">
          <h4>Your Short Cuts</h4>

          <div className="d-flex">
            <img
                  src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                  alt="profile-logo"
                  width={45}
                  height={50}
                  className="me-2 br-30"
              />
        <div>
            <span className="notify_heading">Praveen</span>
            <p>are you there???</p>
        </div>
        </div>


        <div className="d-flex">
       <img
            src="https://dp.profilepics.in/profile_pictures/profile-images/profile-images-for-whatsapp-facebook-instagram-1330.jpg"
            alt="profile-logo"
            width={45}
            height={50}
            className="me-2 br-30"
        />
        <div>
        <span className="notify_heading">Divya</span>
        <p>hey</p>
        </div>
        </div>
        </div>


        <div className="d-flex">
       <img
            src="https://1fid.com/wp-content/uploads/2022/07/girl-profile-pic-14-1024x1024.jpg"
            alt="profile-logo"
            width={45}
            height={50}
            className="me-2 br-30"
        />
        <div>
        <span className="notify_heading">Roshini</span>
        <p> You send a sticker.</p>
        </div>
        </div>

        </div>
    </div>
  )
}

