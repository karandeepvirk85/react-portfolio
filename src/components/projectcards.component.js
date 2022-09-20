import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import LinkIcon from '@material-ui/icons/Link';
import {Col} from 'react-bootstrap';
import { themeColor } from './constants/constants.component';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 445,
        marginBottom: '20px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: themeColor,
    },
}));

const CardIcons = (arr) =>{
    const List = arr.lan.map((item, index)=>
        <IconButton aria-label="add to favorites">
            {item.icon}
        </IconButton>
    )
    return List;
}

const openLink = (link) =>{
    window.open(link);
}

export default function ProjectCards(props){
    const classes = useStyles();
    return(
        <Col xl= {4} lg= {6} md={6} xs={12} className="project-tile">
            <Card className= {classes.root} onClick = {()=>openLink(props.link)}>
                <CardHeader
                    avatar={
                        <Avatar aria-label={props.letter} className={classes.avatar}>{props.letter}</Avatar>
                    }
                    
                    action={
                        <IconButton aria-label="settings">
                            <LinkIcon onClick = {()=>openLink(props.link)} /> 
                        </IconButton>
                    }

                    title = {props.title}
                    subheader = {props.type}
                />

                <CardMedia
                    className = {classes.media}
                    image = {props.media}
                    title = {props.title}
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>

                <CardActions disableSpacing>
                    <CardIcons lan = {props.languages}/>                   
                </CardActions>
            </Card>
        </Col>
    );
}