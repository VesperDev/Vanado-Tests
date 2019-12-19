import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import CustomeContainer from '../../../components/CustomeContainer/CustomeContainer'

const CustomeTabs = withStyles({
    root: {
        border: '2px solid gray',
    },
    indicator: {
        backgroundColor: 'gray',
    },
})(Tabs);


const AntTab = withStyles(theme => ({
    root: {
        textTransform: 'none',
        height: 62,
        borderRight: '2px solid gray'
    },
    selected: {},
}))(props => <Tab disableRipple {...props} />);


function Layout(props) {

    const { valuetab, handleChange, copamx, ascensomc } = props

    return (
        <CustomeContainer>
            <Paper>
                <div className="imagen-logo-veneados" />
            </Paper>
            <Paper square>
                <CustomeTabs
                    textColor="inherit"
                    variant="fullWidth"
                    indicatorColor="primary"
                    value={valuetab}
                    onChange={handleChange}>
                    <AntTab label="COPA MX" />
                    <AntTab label="ASCENSO MX" />
                </CustomeTabs>
            </Paper>
            <Paper>
                {valuetab === 0 && copamx}
                {valuetab === 1 && ascensomc}
            </Paper>
        </CustomeContainer>
    )
}

export default Layout