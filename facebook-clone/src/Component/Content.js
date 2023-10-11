import React from 'react'
import Menu from './reusable/menu'
import statusList from './reusable/statusList'

const Content = () => {
  return (
    <div className="d-flex pt-4" >
          <Menu />
        <div className="p-20">
          <statusList/>
        </div>
    </div>
  )
}

export default Content