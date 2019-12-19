import React from 'react'
import CustomeContainer from '../../../components/CustomeContainer/CustomeContainer'

function Layout(props) {

    const { stats } = props

    return (
        <CustomeContainer>
            {stats}
        </CustomeContainer>
    )
}

export default Layout