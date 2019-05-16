import React from 'react'
import Grid from '@material-ui/core/Grid';

import ModalJugadores from './ModalJugadores'

function Layout(props) {

    const { openModal, player, handleCloseModal, resultJugadores } = props

    return (

        <div>
            <ModalJugadores openModal={openModal} player={player} handleCloseModal={handleCloseModal} />
            <div className="centerContainer">
                <Grid direction="row" justify="center" container spacing={24}>
                    <Grid item xs={12} sm={9} md={8} lg={5} xl={4}>
                        {resultJugadores}
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Layout