import React from 'react'
import {ImagesList} from '../../utils/index'
import Status from './Status'

export const StatusList = (props) => {
  return (
    <div className="content-status d-flex" >
      <Status imgUrl={ImagesList[0].download_url} 
      profileUrl = "https://i.pinimg.com/1200x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg"
      name="Renu"
      />

      <Status imgUrl={ImagesList[0].download_url} 
      profileUrl = "https://i.pinimg.com/1200x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg"
      name="Renu"
      />

      <Status imgUrl={ImagesList[0].download_url} 
      profileUrl = "https://i.pinimg.com/1200x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg"
      name="Renu"
      />

      <Status imgUrl={ImagesList[0].download_url} 
      profileUrl = "https://i.pinimg.com/1200x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg"
      name="Renu"
      />

      <Status imgUrl={ImagesList[0].download_url} 
      profileUrl = "https://i.pinimg.com/1200x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg"
      name="Renu"
      />
    </div>
  )
}
