import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {deepPurple, blue, grey} from "@material-ui/core/colors";
import {Link} from "react-router-dom";
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import { loadCSS } from 'fg-loadcss';
import { WaveLoading } from 'react-loadingg';




const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    root2:{
        background: grey[800],
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: grey[200],
        textDecoration: "none",
        "&:focus, &:hover, &:visited, &:link, &:active": {
            textDecoration: "none"
        }
    }
}));

export default function Navbar(props) {
    const classes = useStyles();
    React.useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
    }, []);

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.root2}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <SpellcheckIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.link}>

                        Natural Language Processing
                        </Link>

                    </Typography>
                    {props.isLoading ?
                        <WaveLoading color={"#3F51B5"}/>
                        :null}
                </Toolbar>
            </AppBar>
        </div>
    );
}
