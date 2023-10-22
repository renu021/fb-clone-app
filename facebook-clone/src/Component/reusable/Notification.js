import React from 'react'
import {BsFillPlayCircleFill,BsCalendarDate} from 'react-icons/bs'
import { BiSolidLike,BiSolidCommentDetail} from 'react-icons/bi'
import { LiaCommentDotsSolid} from 'react-icons/lia'

import {FaShareSquare} from 'react-icons/fa'

 const Notification = () => {
  return (
    <div>
        <h1 className="ms-2"> Your Notification</h1>
        <hr/>
        <h5 className="ms-2">Get notifications via: Text Message</h5><br/><br/>
        <h2 className="ms-2">Sent Today</h2>
        <hr/>


        <div className="d-flex align-items-center ms-2">
        <img
            src="https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp"
            alt="profile-logo"
            width={45}
            height={50}
            className="me-2 br-30"
        />
        <h6><span className="notify_heading">Dinesh</span> send you a friend request. </h6>
       </div>
        <hr/>



        <div className="d-flex align-items-center ms-2">
        <img
            src="https://1fid.com/wp-content/uploads/2022/07/girl-profile-pic-14-1024x1024.jpg"
            alt="profile-logo"
            width={45}
            height={50}
            className="me-2 br-30"
        />
        <h6><span className="notify_heading">Sowmya</span> send you a friend request. </h6>
       </div>
        <hr/>


        <div className="d-flex align-items-center  ms-2">
        <img
            src="https://s.abcnews.com/images/GMA/GMA_Main_KaleJunkie_v04_ag_1691530715188_hpMain_4x3_608.jpg"
            alt="profile-logo"
            width={45}
            height={50}
            className="me-2 br-30"
        />
        <h6><span className="notify_heading">Meghna's Food Magic</span> posted a new video:  Aloo Kulcha made without Oven   <BsFillPlayCircleFill className="svg red"/></h6>
       </div>
        <hr/>
        
        
        <div className="d-flex align-items-center  ms-2">
        <img
            src="https://cdn.pixabay.com/photo/2021/12/28/04/38/cute-6898591_1280.jpg"
            alt="profile-logo"
            width={45}
            height={50}
            className="me-2 br-30"
        />
        <h6><span className="notify_heading">Jhon Carole</span> likes your comment:  wonderful day with my friends   <BiSolidLike className="svg blue"/> </h6>
       </div>
        <hr/>

        <div className="d-flex align-items-center  ms-2">
        <img
            src="https://i.pinimg.com/1200x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg"
            alt="profile-logo"
            width={45}
            height={50}
            className="me-2 br-30"
        />
        <h6><span className="notify_heading">Jhon Carole</span> also commented on <span className="notify_heading">Katie Davis</span>  "Oh ON, that was Awesome" <BiSolidCommentDetail className="svg blue"/></h6>
       </div>
        <hr/>

        <div className="d-flex align-items-center  ms-2">
        <img
            src="https://i.pinimg.com/1200x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg"
            alt="profile-logo"
            width={45}
            height={50}
            className="me-2 br-30"
        />
        <h6><span className="notify_heading">Katrina Mares</span>'s  Birthday Today: Let her Know you're thinking about her!  </h6>
       </div>
        <hr/>


        <div className="d-flex align-items-center  ms-2">
        <img
            src="https://pxbar.com/wp-content/uploads/2023/09/girls-dp-for-instagram.jpg"
            alt="profile-logo"
            width={45}
            height={50}
            className="me-2 br-30"
        />
        <h6><span className="notify_heading">Priyanka</span> Commented on a past in <span className="notify_heading">vadi velu page</span>   <BiSolidCommentDetail className="svg blue"/></h6>
       </div>
        <hr/>


        <div className="d-flex align-items-center  ms-2">
        <img
            src="https://i.pinimg.com/1200x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg"
            alt="profile-logo"
            width={45}
            height={50}
            className="me-2 br-30"
        />
        <h6><span className="notify_heading">Issabella sandoval</span> Shared a link   <FaShareSquare className="svg blue"/></h6>
       </div>
        <hr/>


        <div className="d-flex align-items-center  ms-2">
        <img
            src="https://i.pinimg.com/1200x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg"
            alt="profile-logo"
            width={45}
            height={50}
            className="me-2 br-30"
        />
        <h6><span className="notify_heading">jack</span>  invited you to <span className="notify_heading">Denton Dance Collective</span>'s Event   <BsCalendarDate className="svg red"/></h6>
       </div>
        <hr/>


        


        <div className="d-flex align-items-center  ms-2">
        <img
            src="https://i.pinimg.com/1200x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg"
            alt="profile-logo"
            width={45}
            height={50}
            className="me-2 br-30"
        />
        <h6>Lucy, James and 5 other people reacted to your Photo <BiSolidLike className="svg blue"/></h6>
       </div>
        <hr/>

        <div className="d-flex align-items-center  ms-2">
        <img
            src="https://i.pinimg.com/1200x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg"
            alt="profile-logo"
            width={45}
            height={50}
            className="me-2 br-30"
        />
        <h6>20 people like a post in our group <span className="notify_heading">Drama club</span> <BiSolidLike className="svg blue"/></h6>
       </div>
        <hr/>
    </div>
  )
}
export default Notification