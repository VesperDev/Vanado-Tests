import React from 'react'
import AvatarPlayersLayout from '../../../stateless/AvatarPlayers/AvatarPlayersLayout'
import AvatarPlayers from '../../../stateless/AvatarPlayers/AvatarPlayers'

function ResultJugadores(props) {

    const { handleOpenModal, players } = props
    
    const onCallOpenModal = (player) => {
        handleOpenModal(player)
    }

    return (
        <AvatarPlayersLayout>
            {
                players.map((item, i) => {
                    return (<AvatarPlayers openModal={onCallOpenModal.bind(this)}  key={i} {...item} />)
                })
            }
        </AvatarPlayersLayout>
    )

}

export default ResultJugadores
