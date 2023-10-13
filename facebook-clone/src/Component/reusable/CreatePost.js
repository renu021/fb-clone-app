import React, { useState } from 'react'
import {BsPersonCircle, BsImages, BsEmojiSmile, BsFillCameraFill} from 'react-icons/bs'
 
import {Timestamp, addDoc,collection } from 'firebase/firestore'
import db from '../../firebase'
import  {useSelector}  from 'react-redux';


 const CreatePost = (props) => {
  const user = useSelector((state) => state.user.value)

  // const[user,setUser] = useState(
  //   {
  //     name : 'Renu',
  //     profilePic : 'https://i.pinimg.com/1200x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg'
  //   }
  // )
  const [message, setMessage] = useState("")
  const [image,setImage] = useState("")


  const handleSubmit = () => {
    addDoc(collection(db, "posts"), { 
      message,
      username: user.displayName,
      image,
      timestamp: Timestamp.fromDate(new Date()),
      profilePic: user.photoUrl
    }).then(() => {
      props.fetchposts()
      setImage("")
      setMessage("")
    })
  }
  

  return (
    <div className="create-post bg-white br-10 my-4" >
        <div className="d-flex align-items-center mx-3">
        <BsPersonCircle className='fs-1 pe-2' />
        <input 
        type="search" 
        className='search-box' 
        placeholder="what's on your mind ?"
        style={{flex: 1}} 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />

        <input 
        type="search" 
        className='search-box' 
        placeholder="img url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        />
        <button className='btn btn-success br-20 ms-3' onClick={handleSubmit}>Post</button>
        </div>


        <div className="d-flex pt-5 pb-1 justify-content-evenly" >
          <div className="d-flex post-icon align-items-center" >
              <BsFillCameraFill color='red' /> Live video
          </div>

          <div className="d-flex post-icon align-items-center" >
              <BsImages color='green' /> Photo/Video
          </div>

          <div className="d-flex post-icon align-items-center" >
              <BsEmojiSmile color="#b7b703" className='text-warining' /> Feeling Activity
          </div>
          
        </div>
        

    </div>
  )
}

export default CreatePost