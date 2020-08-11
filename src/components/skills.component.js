import React, {Component} from 'react';
import {Row, Col } from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NatureIcon from '@material-ui/icons/Nature';
import { 
    MaterialsUI,
    Authorize,
    Elavon,
    WooCommerece,
    ACF,
    Total,
    Buddy,
    Lasso,
    Constant,
    Solve,
    Checkfront
} from '../components/customicons.component.js'; 
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
    FaAngular,
    FaTwitter,
    FaYoast,
    FaMailchimp
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

const objExpertise = [
    {
        header:"React",
        value:"70",
        color:"#333333"
    },
    {
        header:"JavaScript",
        value:"70",
        color:"#333333"
    },
    {
        header:"PHP",
        value:"90",
        color:"#333333"
    },
    {
        header:"Angular",
        value:"45",
        color:"#333333"
    },
    {
        header:"Git",
        value:"50",
        color:"#333333"
    },
    {
        header:"Bootstrap",
        value:"80",
        color:"#333333"
    },
    {
        header:"Materials-UI",
        value:"60",
        color:"#333333"
    },
    {
        header:"Wordpress",
        value:"90",
        color:"#333333"
    }
]

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
    header:'RAW PAYMENTS API',
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
        },

        {
            icon:{
                name:'Twitter',
                symbol: <FaTwitter/>,
            }
        },
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

{
    header:'REST CRM INTEGRATIONS',
    language:[
        {
            icon:{
                name:'Lasso',
                symbol: <Lasso/>,
            },
        },

        {
            icon:{
                name:'Mailchimp',
                symbol: <FaMailchimp/>,
            },
        },

        {
            icon:{
                name:'Constant Contact',
                symbol: <Constant/>,
            },
        },

        {
            icon:{
                name:'Solve 360',
                symbol: <Solve/>,
            },
        },

        {
            icon:{
                name:'CheckFront',
                symbol: <Checkfront/>,
            },
        }
    ],
},
{
    header:'WORDPRESS PLUGINS',
    language:[
        {
            icon:{
                name:'Authorize.net',
                symbol: <Authorize/>,
            },
        },

        {
            icon:{
                name:'Elavon',
                symbol: <Elavon/>
            }
        },

        {
            icon:{
                name:'WooCommerece',
                symbol: <WooCommerece/>
            }
        },

        {
            icon:{
                name:'ACF',
                symbol: <ACF/>
            }
        },

        {
            icon:{
                name:'Total Cache',
                symbol: <Total/>
            }
        },

        {
            icon:{
                name:'Yoast SEO',
                symbol: <FaYoast/>
            }
        },
        {
            icon:{
                name:'BuddyPress',
                symbol: <Buddy/>
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

const CircularBar = () =>{
    const List = objExpertise.map((item, index)=>
        <Col xs={12} md={2}>
            <CircularProgressbar
                value={item.value}
                text={`${item.value}%`}
                styles={buildStyles({
                    pathColor: item.color,
                    textColor: item.color
                })}
            />;
            <h5 className="text-center">{item.header}</h5>
        </Col>
    );

    return List;
}
export default class Skills extends Component{
	render() {
        return (
            <div className="page-container skills">
                <h1>SKILLS</h1>
                <Accordians/>
                <Row className="circular-bar">
                    <CircularBar/>           
                </Row>
            </div>
        )  	
    }
}
