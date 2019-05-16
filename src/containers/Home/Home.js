import React, { Component } from 'react'

import Layout from './components/Layout'
import CopaMX from './components/CopaMX'
import AscensoMX from './components/AscensoMX'

import './style.css'

export class Home extends Component {
    
    state = {
        value: 0,
        resultcopamx: [
            {
                month: 'Abril',
                results: [
                    { day: '24', nameday: 'MIE', team: 'Venados F.C', teamtwo: 'Atl. San Luis', score: '1-1' },
                    { day: '27', nameday: 'SAB', team: 'Venados F.C', teamtwo: 'Atl. San Luis', score: '3-1' }
                ]
            },
            {
                month: 'Mayo',
                results: [
                    { day: '02', nameday: 'JUE', team: 'Venados F.C', teamtwo: 'Dorados', score: '1-1' },
                    { day: '05', nameday: 'DOM', team: 'Venados F.C', teamtwo: 'Dorados', score: '2-0' }
                ]
            }
        ],
        resultascensomx: [
            {
                month: 'Junio',
                results: [
                    { day: '24', nameday: 'MIE', team: 'América', teamtwo: 'Xolos', score: '2-1' },
                    { day: '27', nameday: 'SAB', team: 'América', teamtwo: 'Xolos', score: '4-0' }
                ]
            },
            {
                month: 'Julio',
                results: [
                    { day: '02', nameday: 'JUE', team: 'FC Juárez', teamtwo: 'Pumas', score: '3-0' },
                    { day: '05', nameday: 'DOM', team: 'FC Juárez', teamtwo: 'Pumas', score: '2-3' }
                ]
            }
        ]
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {

        const { value, resultcopamx,resultascensomx } = this.state

        return (
            <Layout
                valuetab={value}
                handleChange={this.handleChange.bind(this)}
                copamx={<CopaMX resultcopamx={resultcopamx} />}
                ascensomc={<AscensoMX resultascensomx={resultascensomx} />}
            />
        )
    }
}

export default Home