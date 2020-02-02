import React, {Component} from 'react';
import Navbar from "./Navbar";
import styles from '../styles/SpamClassifierStyle';
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import classNames from "classnames";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";



class SpamClassifier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            loading: false,
            isSpam: false,
            display: false

        };
        this.handleChange = this.handleChange.bind(this);
        this.reset = this.reset.bind(this);
        this.classify = this.classify.bind(this);

    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    reset = ()=>{
        this.setState({text: "", display: false})
    };
    classify = async ()=>{
        if(this.state.text !== "") {
            this.setState({loading: true});
            await axios.post("https://nlp-api21.herokuapp.com/classifySpam", {text: this.state.text})
                .then(res => {
                    console.log(res);
                    let pred = res.data.prediction;
                    if (pred === '0') {
                        console.log("Not spam");
                        this.setState({isSpam: false, display: true})
                    } else if (pred === '1') {
                        console.log("Spam");
                        this.setState({isSpam: true, display: true})
                    }
                })
                .catch(err => {
                        console.log('Error: ' + err);
                    }
                );
            this.setState({loading: false});
        }
    }
    render() {
        const {classes} = this.props;
        const {text, loading, isSpam, display} = this.state;

        return (
            < div className={classes.head}>
                <Navbar isLoading={loading}/>

                <Grid container className={classes.container}>
                    <Grid item xs={6}>
                        <section style={{margin: "1em", marginTop: "4.5em"}}>
                            <p style={{fontSize: "25px", fontWeight: "bold", textAlign: "center"}}>Spam Classifier</p>
                            <p style={{fontWeight:" bold", textAlign: "center"}}>Classification is done using Naive bayes with 97.93% accuracy </p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Message will be classified as spam or not spam<br/>
                        </section>
                    </Grid>
                    <Grid item xs={6}>
                        <section style={{margin: "1em"}}>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                placeholder="Message here..."
                                style={{width: "80%", height: "15em", margin:"2em", borderRadius:"10px", marginTop: "4.5em", borderColor: "rgb(63, 81, 181)", outline: "None", borderWidth: "2.5px", padding: "10px"}}
                                value={text}
                                name={"text"}
                                onChange={this.handleChange}
                            />
                            <Button variant="contained" color="primary" style={{marginLeft: "8em"}} onClick={this.classify} disabled={loading}>
                                Classify
                            </Button>
                            <Button variant="outlined" color="secondary" style={{marginLeft: "2em"}} onClick={this.reset}>
                                Reset
                            </Button>
                            {display ?
                                <p style={{fontWeight: "bold", fontSize:"24px", textAlign: "center", marginRight:"1em", borderRadius: "4px", lineHeight: "1.7em"}}
                                   className={classNames( classes.result, {
                                       [classes.red]: isSpam
                                   })}>{isSpam ? <span>This message is spam</span>: <span>This message is not spam</span>} </p>
                            :
                                null
                            }

                        </section>
                    </Grid>
                </Grid>
                <Fab color="secondary"  style={{fontSize: "1em", position: "fixed", top: "90%", marginLeft:"0.5em"}}>
                    <Icon className="fas fa-angle-double-left" onClick={()=>this.props.history.push("/")} />
                </Fab>
            </div>
        );
    }
}

export default (withStyles(styles, {withTheme: true})(SpamClassifier));
