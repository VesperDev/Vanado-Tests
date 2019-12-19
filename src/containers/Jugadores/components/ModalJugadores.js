import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

function ModalJugadores(props) {

    const { openModal, handleCloseModal, player } = props
    const { name, position } = player

    return (
        <div>
            <Dialog
                className="main-container-modal"
                open={openModal}
                onClose={handleCloseModal}>

                <DialogContent className="container-modal-ft">
                    <div className="item-ft">FICHA TÉCNICA</div>
                    <div className="item-ft">
                        <div className="cover-player"/>
                    </div>
                    <div className="item-ft">{name}</div>
                    <div className="item-ft">{position}</div>
                </DialogContent>

                <DialogContent className="container-modal-dj">
                    <div className="item-dj">
                        <p>FECHA DE NACIMIENTO</p>
                        <p>29/05/1985</p>
                    </div>
                    <div className="item-dj">
                        <p>LUGAR DE NACIMIENTO</p>
                        <p>Distro Federal, México</p>
                    </div>
                    <div className="item-dj">
                        <p>PESO</p>
                        <p>81 KG</p>
                    </div>
                    <div className="item-dj">
                        <p>ALTURA</p>
                        <p>1.86 M</p>
                    </div>
                    <div className="item-dj">
                        <p>EQUIPO ANTERIOR</p>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ModalJugadores
