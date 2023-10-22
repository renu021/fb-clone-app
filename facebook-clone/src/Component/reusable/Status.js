import React from 'react'

export default function Status(props) {
  return (
    <div className="status" >
        <img src={props.imgUrl} width={170} height={300} className="br-20" alt="status-background" />
        <img src={props.profileUrl} width={45} height={45} alt="status-profile" className="status-profile br-20" />
        <div className="name"><b>{props.name}</b></div>
    </div>
  )
}
