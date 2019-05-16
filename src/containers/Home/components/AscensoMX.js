import React from 'react'
import Results from './../../../stateless/Results/Results'

function AscensoMX(props) {

  const { resultascensomx } = props

  return (
    <div>
      {
        resultascensomx.map(item => {
          return item.results.map((subItem, i) => {
            return (
              <Results key={i} order={i} month={item.month} {...subItem} />
            )
          })
        })
      }
    </div>
  )
}

export default AscensoMX
