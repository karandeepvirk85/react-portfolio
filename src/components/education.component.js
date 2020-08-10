import React,{Component, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ImageModal from '../components/modal.component.js';
import {Row, Col} from 'react-bootstrap';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom:"10px"
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 800,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
}));

const arrDocuments = [
    {
        image:'/documents/certificates/original/master.jpg',
        thumb:'/documents/certificates/thumbs/master.jpg',
        title:'Master Degree',
        subtitle:'E Security',
        location:'Fatehgarh Sahib, PTU',
        year:'May 2013'
    },
    {
        image:'/documents/certificates/original/btech.jpg',
        thumb:'/documents/certificates/thumbs/btech.jpg',

        title:'Bachelor Degree',
        subtitle:'Computer Science',
        location:'Lalru Mandi, Mohali, PTU',
        year:'May 2011'
    },
    {
        image:'/documents/certificates/original/hcl.jpg',
        thumb:'/documents/certificates/thumbs/hcl.jpg',
        title:'Industrial Traning',
        subtitle:'JAVA',
        location:'Mohali, HCL',
        year:'Jan 2011'
    },
    {
        image:'/documents/certificates/original/award.jpg',
        thumb:'/documents/certificates/thumbs/award.jpg',
        title:'1st Prize',
        subtitle:'Presentation on Artifical Intelligence',
        location:'BBSBEC, Fatehgarh Sahib, PTU',
        year:'Jan 2012'
    },
    {
        image:'/documents/certificates/original/wireless.jpg',
        thumb:'/documents/certificates/thumbs/wireless.jpg',
        title:'Wireless Technology',
        subtitle:'International Conference',
        location:'Ram Nagar, Banur, Patiala',
        year:'June 2012'
    },
    {
        image:'/documents/certificates/original/stn.jpg',
        thumb:'/documents/certificates/thumbs/stn.jpg',
        title:'Training',
        subtitle:'JAVA',
        location:'Sector 34-A, CHD',
        year:'July 2009'
    }
];

const MediaCard = () =>{
    const classes = useStyles();
    const List = arrDocuments.map((item,index) =>
        <Col sm={12} md={12} lg={12} xl={6}>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={item.thumb} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {item.subtitle}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {item.location}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        <ImageModal title={item.title} image={item.image} />
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">{item.year}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </Col>
    );
    return List;
}



export default class Education extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "page-container education">
                <h1>Education</h1>
                <Row>
                    <MediaCard/>
                </Row>
            </div>
        )
    }
}