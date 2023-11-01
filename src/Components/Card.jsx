import React from 'react'
import {card} from "../Styles/App.module.css"
import avatar from "../img/avatar.jpg"
const Card = ({usuario}) => {

  const {nombre, apellido, email, rol} = usuario

  return (
    <div className={card}>
      <img src={avatar} alt="" height="250px" />
      <h1>{nombre} {apellido}</h1>
      <h2>{email}</h2>
      <h4>{rol}</h4>
    </div>
  )
}

export default Card