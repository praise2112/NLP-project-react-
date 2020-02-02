import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import styles from '../styles/HomeStyle';
import {withStyles} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Home extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.head}>
                <Navbar/>
                <section style={{margin: "3em", backgroundColor: "rgb(66, 66, 66)", height: "72vh", width: "92vw", borderRadius: "1em"}} >
                    <p className={classes.desc}>Natural Language Processing on sentiment analysis, new classification and spam classification.</p>
                    <Card className={classes.card} style={{marginLeft: "1.5em"}} >
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://www.netowl.com/wp-content/uploads/2018/01/sentimentanalysis.jpg"
                                title="sentiment analysis"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Sentiment Analysis
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Determining whether a piece of writing is positive, negative using natural language processing (NLP) and machine learning techniques
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link to="/sentimentAnalysis" className={classes.link}>Analyze</Link>
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                style={{height: 180}}
                                className={classes.media}
                                image="https://miro.medium.com/max/1050/1*HgXA9v1EsqlrRDaC_iORhQ.png"
                                title="News Classifier"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    News Classification
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                   Categorization of internet new or articles based one their headlines
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link to="/newsClassifier" className={classes.link}> Classify</Link>
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                style={{height: 200}}

                                className={classes.media}
                                image="https://netviperinc.com/wp-content/uploads/2015/05/spam-bots.jpg"
                                title="sentiment analysis"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Spam Classifier
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Email Spam classifier using nlp text classification
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link to="/spamclassifier" className={classes.link}> Categorize</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </section>
                {/*This is the home page*/}
                {/*<Link to="/newsClassifier">news classifier</Link>*/}
                {/*<Link to="/sentimentAnalysis">sentiment analysis</Link>*/}
                {/*<Link to="/spamClassifier">spam classifier</Link>*/}
            </div>
        );
    }
}

export default (withStyles(styles, {withTheme: true})(Home));
