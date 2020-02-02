import { makeStyles } from '@material-ui/core/styles'
import {blue} from "@material-ui/core/colors";
import React from "react";
import bg from "./bg.svg";
const styles =  theme =>  ({
    head: {
        height: "100vh",
        background: `url(${bg}) center center fixed`,
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
        backgroundSize: "cover !important",
    },
    card: {
        margin:"0.4em",
        display: "inline-block",
        maxWidth: 345,
        backgroundColor: "rgba(255, 255, 255, 0.8)"
    },
    media: {
        height: 140,
    },
    desc:{
        paddingTop: "1em",
        color: "white",
        textAlign: "center",
        fontSize: "23px",
    },
    link: {
        color: blue[500],
        textDecoration: "none",
        "&:focus, &:hover, &:visited, &:link, &:active": {
            textDecoration: "none"
        }
    }
});

export default styles;
