import React from 'react'
import Grid from '@material-ui/core/Grid';

function Layout(props) {

    const { stats } = props

    return (
        <div className="centerContainer">
            <Grid direction="row" justify="center" container spacing={24}>
                <Grid item xs={12} sm={9} md={8} lg={5} xl={4}>
                    {stats}
                </Grid>
            </Grid>
        </div>
    )
}

export default Layout