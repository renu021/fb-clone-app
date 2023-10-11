import React from 'react'
import {BsPersonCircle} from 'react-icons/bs'

export const CreatePost = () => {
  return (
    <div className="create-post bg-white br-10 my-4" >
        <div className="d-flex align-items-center mx-3">
        <BsPersonCircle className='fs-1 pe-2' />
        <input 
        type="search" 
        className='search-box' 
        placeholder="what's on you're mind ?"
        style={{flex: 1}} />
        </div>
    </div>
  )
}
