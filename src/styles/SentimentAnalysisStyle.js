import { makeStyles } from '@material-ui/core/styles'
import {blue, grey} from "@material-ui/core/colors";

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
    container: {
        margin: "3em",
        backgroundColor: grey[700],
        height: "76vh",
        width: "92vw",
        borderRadius: "1em",
        marginLeft: "2.6em",
        color: grey[300]
    },
    section1: {
        backgroundColor: "red"
    },
    section2: {
        backgroundColor: "blue"
    },
    result: {
        boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"

    }
});

export default styles;
