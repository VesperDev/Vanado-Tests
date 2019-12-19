import React, { Component } from 'react'
import Layout from './components/Layout'
import ResultJugadores from './components/ResultJugadores'

import './style.css'

export class Jugadores extends Component {

    state = {
        openModal: false,
        player: {},
        players: [
            { name: 'Javier Hdz', position: 'Delantero' },
            { name: 'Hirving Lozano', position: 'Delantero' },
            { name: 'Guillermo Ochoa', position: 'Arquero' },
            { name: 'Carlos Vela', position: 'Delantero' },
            { name: 'Hector Herrera', position: 'Mediocampista' },
            { name: 'Raúl Jimenez', position: 'Delantero' },
            { name: 'Diego Lainez', position: 'Mediocampista' }

        ]
    }

    handleOpenModal = () => {
        this.setState({ openModal: true });
    }

    handleCloseModal = () => {
        this.setState({ openModal: false });
    }

    handleOpenModalaVatar = (player) => {
        this.setState({ openModal: true, player: player })
    }

    render() {

        const { openModal, player, players } = this.state

        return (
            <Layout
                openModal={openModal}
                player={player}
                handleOpenModal={this.handleOpenModal.bind(this)}
                handleCloseModal={this.handleCloseModal.bind(this)}
                resultJugadores={
                    <ResultJugadores
                        handleOpenModal={this.handleOpenModalaVatar.bind(this)}
                        players={players}
                    />
                }
            />
        )
    }
}

export default Jugadores
