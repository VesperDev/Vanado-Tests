import React from 'react'
import Results from './../../../stateless/Results/Results'

function CopaMX(props) {

  const { resultcopamx } = props
  return (
    <div>
      {
        resultcopamx.map(item => {
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

export default CopaMX
