import React from 'react'
import './style.css'

function Stats(props) {

  const { order, position, team, jj, dg, pts } = props;

  return (
    <div>
      {
        order === 0 && (
          <div className="grid-container-header-stats">
            <div className="item-h-title">Tabla General</div>
            <div className="item-h-tjj small-txt-header">JJ</div>
            <div className="item-h-tdg small-txt-header">DG</div>
            <div className="item-h-tpts small-txt-header">PTS</div>
          </div>
        )
      }
      <div className="grid-container-stats">
        <div className="item-po">{position}</div>
        <div className="item-img-team" />
        <div className="item-team">{team}</div>
        <div className="item-jj table-score">{jj}</div>
        <div className="item-dg table-score">{dg}</div>
        <div className="item-pts table-score">{pts}</div>
      </div>
    </div>
  )
}

export default Stats
