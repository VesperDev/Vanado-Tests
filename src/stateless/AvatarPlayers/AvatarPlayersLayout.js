import React from 'react'
import './style.css'

function AvatarPlayersLayout(props) {

    const { children } = props

    return (
        <div className="grid-container-avatar-pla">
            {children}
        </div>
    )
}

export default AvatarPlayersLayout
