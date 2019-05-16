import React, { Component } from 'react'
import Layout from './components/Layout'
import ResultStats from './components/ResultStats'

export class Estadisticas extends Component {

  state = {
    stats: [
      { position: 1, team: 'Venados F.C.', jj: 14, dg: 22, pts: 28 },
      { position: 2, team: 'Atl. San Luis', jj: 14, dg: 17, pts: 25 },
      { position: 3, team: 'Zacatepec', jj: 14, dg: 22, pts: 22 },
      { position: 4, team: 'Cimarrones de Sonora', jj: 14, dg: 17, pts: 22 },
      { position: 5, team: 'Dorados', jj: 14, dg: 19, pts: 20 }
    ]
  }

  render() {

    const { stats } = this.state

    return (
      <Layout
        stats={<ResultStats stats={stats} />}
      />
    )
  }
}

export default Estadisticas
