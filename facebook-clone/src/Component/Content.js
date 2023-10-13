import React, { useEffect, useState } from 'react'
import Menu from './reusable/menu'
import  CreatePost  from './reusable/CreatePost'
import StatusList  from './reusable/StatusList'
import Post from './reusable/Post'
import db from '../firebase'
import {getDocs, collection} from 'firebase/firestore'



function Content (){

  const[posts,setPosts] = useState([]);
  const fetchposts = async () => {
    const querySnapShot = await getDocs(collection(db, "posts"))
    let temp = []
    querySnapShot.forEach((doc) => {
      temp.push({id: doc.id, ...doc.data()})
    })

    temp = temp.sort(function(x,y){
      return y.timestamp - x.timestamp
    })
    setPosts(temp);

  }
  useEffect(() => {
      fetchposts();
  },[])

  return (
    <div className="d-flex pt-4" >
          <Menu />
        <div className="p-20">
          <StatusList />
          <CreatePost fetchposts={fetchposts} />
          {posts.map((post) => (
            <Post {...post} />))}


          {/* <Post message='hi' 
                profilePic ='https://i.pinimg.com/1200x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg' 
                image="https://i.pinimg.com/1200x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg" 
                username="Renu" 
                date="12/10/2023" /> */}

        </div>

    

    </div>
  )
}

export default Content





