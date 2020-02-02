import React, {Component} from 'react';
import Navbar from "./Navbar";
import styles from '../styles/SentimentAnalysisStyle';
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from "./ProgressProvider";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";



class SentimentAnalysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            loading: false,
            result: null

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
        this.setState({text: "", result: null})
    };
    classify = async ()=>{
        if(this.state.text !== "") {
            this.setState({loading: true});
            await axios.post("https://nlp-api21.herokuapp.com/sentiment", {text: this.state.text})
                .then(res => {
                    console.log(res);
                    let pred = res.data.prediction *100;
                    this.setState({result: pred})
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
        const {text, loading, result} = this.state;
        const percentage = result;

        return (
            < div className={classes.head}>
                <Navbar isLoading={loading}/>

                <Grid container className={classes.container}>
                    <Grid item xs={6}>
                        <section style={{margin: "1em", marginTop: "4.5em"}}>
                            <p style={{fontSize: "25px", fontWeight: "bold", textAlign: "center"}}>Sentiment Analysis</p>
                            This is to determine whether a piece of writing is positive, negative or neutral.
                            <p style={{fontWeight:" bold", textAlign: "center"}}>Classification is done with review dataset using Naive bayes with 96.55% accuracy </p>
                        </section>
                    </Grid>
                    <Grid item xs={6}>
                        <section style={{margin: "1em"}}>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                placeholder="Text here..."
                                style={{width: "80%", height: "15em", margin:"2em", borderRadius:"10px", marginTop: "4.5em", borderColor: "rgb(63, 81, 181)", outline: "None", borderWidth: "2.5px", padding: "10px"}}
                                value={text}
                                name={"text"}
                                onChange={this.handleChange}
                            />
                            <Button variant="contained" color="primary" style={{marginLeft: "8em"}} onClick={this.classify} disabled={loading}>
                                Analyse
                            </Button>
                            <Button variant="outlined" color="secondary" style={{marginLeft: "2em"}} onClick={this.reset}>
                                Reset
                            </Button> <br/>
                            { result === null ?
                                null
                                :
                                <>
                                <ProgressProvider valueStart={10} valueEnd={percentage}>
                                    {value => <CircularProgressbar
                                        value={value} text={`${value}%`}
                                        // style={{paddingLeft: "1em"}}
                                        styles={{
                                            root:{
                                                width: "5em",
                                                paddingLeft: "5em",
                                                paddingTop: "0.8em"
                                            },
                                            path: {
                                                // Path color
                                                stroke: `rgb(63, 81, 181)`,
                                            },
                                            text: {
                                                // Text color
                                                fill: 'rgb(255, 255, 255)'
                                            }
                                        }}
                                    />}
                                </ProgressProvider>

                                <span style={{fontWeight: "bold", fontSize:"20px", textAlign: "center", marginLeft:"1.5em", padding: "0.5em", borderRadius: "3px" }} className={classes.result}>Text is {percentage}% positive </span>
                                </>
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

export default (withStyles(styles, {withTheme: true})(SentimentAnalysis));
