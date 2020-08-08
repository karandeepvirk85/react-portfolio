import React,{Component, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Row, Col} from 'react-bootstrap';
import ImageModal from '../components/modal.component.js';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        maxWidth: 445
    },
    media: {
        height: 240,
    }
}));

const arrDocuments = [
    {
        image:'master.jpg',
        title:'Master Degree',
        subtitle:'E Security',
        location:'Fatehgarh Sahib, PTU'
    },
    {
        image:'btech.jpg',
        title:'Bachelor Degree',
        subtitle:'Computer Science',
        location:'Lalru Mandi, Mohali, PTU',
    },
    {
        image:'hcl.jpg',
        title:'Industrial Traning',
        subtitle:'JAVA',
        location:'Mohali, HCL'
    },
    {
        image:'award.jpg',
        title:'1st Prize',
        subtitle:'Presentation on Artifical Intelligence',
        location:'BBSBEC, Fatehgarh Sahib, PTU'
    },
    {
        image:'wireless.jpg',
        title:'Wireless Technology',
        subtitle:'International Conference',
        location:'Ram Nagar, Banur, Patiala'
    },
    {
        image:'stn.jpg',
        title:'Training',
        subtitle:'JAVA',
        location:'Sector 34-A, CHD'
    }
];

const MediaCard = () =>{
    const classes = useStyles();
    const List = arrDocuments.map((item,index) =>
        <Col lg={4} md={4} sm={6} xs={12}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">{item.title}</Typography>
                        <Typography gutterBottom component="p">{item.location}</Typography>
                        <Typography gutterBottom variant="p" component="p">{item.subtitle}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <ImageModal title={item.title} image={"documents/certificates/original/"+item.image} />
                </CardActions>
            </Card>
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