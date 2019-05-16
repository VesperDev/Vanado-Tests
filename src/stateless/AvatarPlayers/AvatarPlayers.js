import React from 'react'
import './style.css'

function AvatarPlayers(props) {

  const { openModal, position, name } = props

  return (
    <div className="item-ava-pla" onClick={() => openModal({...props})}>
      <div className="avatar-play" />
      <p className="position-play">{position}</p>
      <p className="name-play">{name}</p>
    </div>
  )
}

export default AvatarPlayers
