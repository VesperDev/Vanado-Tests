import React from 'react'
import CustomeContainer from '../../../components/CustomeContainer/CustomeContainer'

import ModalJugadores from './ModalJugadores'

function Layout(props) {

    const { openModal, player, handleCloseModal, resultJugadores } = props

    return (
        <div>
            <ModalJugadores openModal={openModal} player={player} handleCloseModal={handleCloseModal} />
            <CustomeContainer>
                {resultJugadores}
            </CustomeContainer>
        </div>
    )
}

export default Layout