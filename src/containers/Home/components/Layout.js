import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Layout(props) {

    const { valuetab, handleChange, copamx, ascensomc } = props

    return (
        <div className="centerContainer">
            <Grid direction="row" justify="center" container spacing={24}>
                <Grid item xs={12} sm={9} md={8} lg={5} xl={4}>
                    <Paper>
                        <div className="imagen-logo-veneados" />
                    </Paper>
                    <Paper square>
                        <Tabs
                            textColor="inherit"
                            variant="fullWidth"
                            indicatorColor="primary"
                            value={valuetab}
                            onChange={handleChange}>
                            <Tab label="COPA MX" />
                            <Tab label="ASCENSO MX" />
                        </Tabs>
                    </Paper>
                    <Paper>
                        {valuetab === 0 && copamx}
                        {valuetab === 1 && ascensomc}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Layout