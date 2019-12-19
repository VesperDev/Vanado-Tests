import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PeopleIcon from '@material-ui/icons/People';

import './style.css'

const styles = theme => ({
    root: {
        [theme.breakpoints.down('xs')]: {
            width: 260,
        },
        width: 300,
        flex: 1,
        backgroundColor: '#fafafa'
    },
});

export class ListActionDrawer extends PureComponent {

    render() {
        const { classes, onCloseDrawer } = this.props;

        return (
            <div className={classes.root}>
                <section className="container-list">
                    <List component="nav">
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText onClick={() => onCloseDrawer({ view: "Partidos" })} primary={<Link className="setStyleHref" to="/">Home</Link>} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <EqualizerIcon />
                            </ListItemIcon>
                            <ListItemText onClick={() => onCloseDrawer({ view: "Estadísticas" })} primary={<Link className="setStyleHref" to="/estadisticas">Estadísticas</Link>} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText onClick={() => onCloseDrawer({ view: "Jugadores" })} primary={<Link className="setStyleHref" to="/jugadores">Jugadores</Link>} />
                        </ListItem>
                    </List>
                </section>
            </div>
        )
    }
}

ListActionDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListActionDrawer);