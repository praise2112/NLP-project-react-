import React, {Component} from 'react';
import Navbar from "./Navbar";
import styles from '../styles/NewsClassifierStyle';
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import Icon from "@material-ui/core/Icon";

import Fab from "@material-ui/core/Fab";


class NewsClassifier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            loading: false,
            result: ""

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
        this.setState({text: "", result: ""})
    };
    classify = async ()=>{
        if(this.state.text !== "") {
            this.setState({loading: true});
            await axios.post("https://nlp-api21.herokuapp.com/classifyNews", {text: this.state.text})
                .then(res => {
                    console.log(res);
                    let pred = res.data.prediction;
                    if (pred === 'b') {
                        console.log("Business News");
                        this.setState({result: "Business News"})
                    } else if (pred === 't') {
                        console.log("Science and Technology");
                        this.setState({result: "Science and Technology"})
                    } else if (pred === 'e') {
                        console.log("Entertainment");
                        this.setState({result: "Entertainment"})
                    } else if (pred === 'm') {
                        console.log("Health");
                        this.setState({result: "Health"})
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
        const {text, loading, result} = this.state;

        return (
            < div className={classes.head}>
                <Navbar isLoading={loading}/>

                    <Grid container className={classes.container}>
                        <Grid item xs={6}>
                           <section style={{margin: "1em", marginTop: "4.5em"}}>
                               <p style={{fontSize: "25px", fontWeight: "bold", textAlign: "center"}}>News Classifier</p>
                               <p style={{fontWeight:" bold", textAlign: "center"}}>Classification is done using Naive bayes with 96.55% accuracy </p>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;News can be classified to 4 types of category <br/>
                               .&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Business News <br/>
                               .&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Entertainment News <br/>
                               .&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Science and Technology News <br/>
                               .&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; Health News
                           </section>
                        </Grid>
                        <Grid item xs={6}>
                            <section style={{margin: "1em"}}>
                                <TextareaAutosize
                                    aria-label="empty textarea"
                                    placeholder="News/article here..."
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
                                <p style={{fontWeight: "bold", fontSize:"24px", textAlign: "center", marginRight:"1em", backgroundColor: "rgb(63, 81, 181)", borderRadius: "4px", lineHeight: "1.7em"}} className={classes.result}>{result} </p>
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

export default (withStyles(styles, {withTheme: true})(NewsClassifier));
