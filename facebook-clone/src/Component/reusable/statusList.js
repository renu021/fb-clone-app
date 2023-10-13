import React from 'react'
import {ImagesList} from '../../utils/index'
import Status from './Status'

 const StatusList = (props) => {
  return (
    <div className="content-status d-flex" >
      <Status imgUrl={ImagesList[0].download_url} 
      profileUrl = "https://i.pinimg.com/1200x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg"
      name="Renu"
      />

      <Status imgUrl={ImagesList[1].download_url} 
      profileUrl = "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      name="Praveen"
      />

      <Status imgUrl={ImagesList[2].download_url} 
      profileUrl = "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
      name="Mano"
      />

      <Status imgUrl={ImagesList[3].download_url} 
      profileUrl = "https://www.wallpaperg.com/screenshot/shot7/1384528981-screenshot-www.wallpaperg.com.jpg"
      name="Priya"
      />

      <Status imgUrl={ImagesList[4].download_url} 
      profileUrl = "https://dp.profilepics.in/profile_pictures/profile-images/profile-images-for-whatsapp-facebook-instagram-1330.jpg"
      name="divya"
      />
    </div>
  )
}

export default StatusList