import React from 'react'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import './style.css'

function Results(props) {

  const { order, month, day, nameday, team, teamtwo, score } = props

  return (
    <div>
      {order === 0 && (<div className="header-cont"><p className="header-txt">{month}</p></div>)}
      <div className="grid-container">
        <div className="item">
          <CalendarTodayIcon className="color-icon" fontSize={'large'} />
          <p className="number-day">{day}</p>
        </div>
        <div className="item-cont-logo"><div className="logo-team" /></div>
        <div className="item-result"><p>{score}</p></div>
        <div className="item-cont-logo"> <div className="logo-team" /></div>
        <div className="item-name-day">{nameday}</div>
        <div className="item-name-equi">{team}</div>
        <div className="item-name-equi">{teamtwo}</div>
      </div>
    </div>
  )
}

export default Results
