import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
        padding: '2em 0em'
    },
});


function CustomeContainer(props) {

    const { children } = props
    const classes = useStyles()
    
    return (
        <Container maxWidth="sm" className={classes.root}>
            {children}
        </Container>
    )
}

export default CustomeContainer