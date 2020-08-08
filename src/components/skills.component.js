import React, {Component} from 'react';
import {Row, Col } from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NatureIcon from '@material-ui/icons/Nature';
import { MaterialsUI } from '../components/customicons.component.js'; 
import {
    FaReact, 
    FaWordpress, 
    FaJs, 
    FaPhp, 
    FaPaypal, 
    FaStripeS,
    FaSass,
    FaHtml5,
    FaCss3Alt,
    FaGithub,
    FaNodeJs,
    FaBootstrap,
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaAngular
} from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
}));

const objSkills = [
{
    header:'FRAMEWORKS, LIBRARIES & COMPILERS',
    language:[
        {
            icon:{
                name:'REACT',
                symbol: <FaReact/>
            }
        },

        {
            icon:{
                name:'Angular',
                symbol: <FaAngular/>
            }
        },

        {
            icon:{
                name:'Material UI',
                symbol: <MaterialsUI/>,
            }
        },

        {
            icon:{
                name:'Sass',
                symbol: <FaSass/>
            }
        },

        {
            icon:{
                name:'Node JS',
                symbol: <FaNodeJs/>
            }
        },

        {
            icon:{
                name:'Bootstrap 3 and 4',
                symbol: <FaBootstrap/>
            }
        }
    ],
},

{
    header:'PROGRAMMING LANGUAGES',
    language:[
        {
            icon:{
                name:'JavaScript',
                symbol: <FaJs/>
            }
        },
        {
            icon:{
                name:'PHP',
                symbol: <FaPhp/>
            }
        },
        {    
            icon:{
                name:'HTML5',
                symbol: <FaHtml5/>
            }
        },
        {
            icon:{
                name:'CSS3',
                symbol: <FaCss3Alt/>
            }
        }
    ],
},

{
    header:'PAYMENTS API',
    language:[
        {
            icon:{
                name:'PayPal Standard',
                symbol: <FaPaypal/>,
            }
        },

        {    
            icon:{
                name:'Stripe API',
                symbol: <FaStripeS/>,
            },
        },

        {
            icon:{
                name:'PayPal Pro',
                symbol: <FaPaypal/>,
            }
        }
    ],
},

{
    header:'SOCIAL API',
    language:[
        {
            icon:{
                name:'Instagram',
                symbol: <FaFacebook/>,
            }
        },
        {
            icon:{
                name:'Facebook',
                symbol: <FaInstagram/>,
            }
        },
        {
            icon:{
                name:'LinkedIn',
                symbol: <FaLinkedin/>,
            }
        }
    ],
},

{
    header:'CMS',
    language:[
        {
            icon:{
                name:'WordPress',
                symbol: <FaWordpress/>,
            }
        }
    ],
},

{
    header:'VERSION CONTROL',
    language:[
        {
            icon:{
                name:'GIT',
                symbol: <FaGithub/>,
            },
        },
        {
            icon:{
                name:'SOURCE TREE',
                symbol: <NatureIcon/>
            }
        },
    ],
},
]

const SubIcons = (arrItem) => {
    console.log(arrItem);
    const ListIcons = arrItem.map((item, index) =>
        <div className="sub-icons" key={index}>
            <p>{item.icon.symbol}</p>
            <p>{item.icon.name}</p>
        </div>
    );
    return ListIcons;
}

const Accordians = () => {
    const classes = useStyles();
    const List = objSkills.map((item,index)=>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={"panel"+index+"a-content"}
                id={"panel"+index+"a-header"}
            >
                <Typography className={classes.heading}>{item.header}</Typography>
            </AccordionSummary>
            
            <AccordionDetails>
                <Typography>
                    {SubIcons(item.language)}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
    return  <div className={classes.root}>{List}</div>;
}

export default class Skills extends Component{
	render() {
        return (
            <div className="page-container skills">
                <h1>SKILLS</h1>
                <Accordians/>
                <Row className="circular-bar">
                    <Col xs={12} md={2}>
                        <CircularProgressbar
                        value={70}
                        text={`${70}%`}
                        styles={buildStyles({
                            pathColor: 'rgb(0 171 73 / 70%)',
                            textColor: 'rgb(0 171 73 / 70%)',
                        })}
                        />;
                        <h4 className="text-center">React</h4>
                    </Col>
                    <Col xs={12} md={2}>
                        <CircularProgressbar 
                            value={70} 
                            text={`${70}%`} 
                            styles={buildStyles({
                            pathColor: 'rgb(0 171 73 / 70%)',
                            textColor: 'rgb(0 171 73 / 70%)',
                        })}
                        />
                        <h4 className="text-center">JavaScript</h4>
                    </Col>
                    <Col xs={12} md={2}>
                        <CircularProgressbar 
                            value={90} 
                            text={`${90}%`}
                            styles={buildStyles({
                                pathColor: 'rgb(9 226 102 / 70%)',
                                textColor: 'rgb(9 226 102 / 70%)',
                            })} 
                        />
                        <h4 className="text-center">PHP</h4>
                    </Col>
                    <Col xs={12} md={2}>
                        <CircularProgressbar 
                            value={45} 
                            text={`${45}%`} 
                            styles={buildStyles({
                                pathColor: 'rgb(202 27 27 / 70%)',
                                textColor: 'rgb(202 27 27 / 70%)',
                            })}
                        />
                        <h4 className="text-center">Angular</h4>
                    </Col>
                    <Col xs={12} md={2}>
                        <CircularProgressbar
                            value={50} 
                            text={`${50}%`}
                            styles={buildStyles({
                                pathColor: 'rgb(141 214 56)',
                                textColor: 'rgb(141 214 56)',
                            })}
                        />
                        <h4 className="text-center">Git</h4>
                    </Col>
                    <Col xs={12} md={2}>
                        <CircularProgressbar
                            value={80} 
                            text={`${80}%`} 
                            styles={buildStyles({
                                pathColor: 'rgba(0, 171, 73, 0.7)',
                                textColor: 'rgba(0, 171, 73, 0.7)',
                        })}
                        />
                        <h4 className="text-center">Bootstrap</h4>
                    </Col>
                </Row>
            </div>
        )  	
    }
}
