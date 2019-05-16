import React from 'react'
import Stats from '../../../stateless/Stats/Stats'

function ResultStats(props) {

    const { stats } = props

    return (
        <div>
            {
                stats.map((item, i) => {
                    return (
                        <Stats key={i} order={i} {...item} />
                    )
                })
            }
        </div>
    )
}
export default ResultStats