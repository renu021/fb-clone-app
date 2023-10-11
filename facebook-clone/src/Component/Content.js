import React from 'react'
import Menu from './reusable/menu'
import { CreatePost } from './reusable/CreatePost'
import { StatusList } from './reusable/StatusList'


const Content = () => {
  return (
    <div className="d-flex pt-4" >
          <Menu />
        <div className="p-20">
          <StatusList />
          <CreatePost />
        </div>
    </div>
  )
}

export default Content