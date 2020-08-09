import React,{Component} from 'react';
import ProjectCards from './projectcards.component.js';
import {Container, Row} from 'react-bootstrap';
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
    FaGoogle
} from 'react-icons/fa';

const objProject = [
    {
        letter: 'O',
        title:'Okanagan Tour',
        type:'Personal',
        link:'https://okanagantour.ca',
        media:'/images/projects/ok.jpg',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo est, accumsan vitae egestas ac, luctus id elit. Ut nibh augue, posuere vitae tincidunt ac, fringilla quis justo. Mauris sit amet ornare lacus. Duis non nisi ultrices, elementum nibh in, hendrerit velit. Curabitur diam felis, interdum",
        languages:[
            {icon: <FaReact/>},
            {icon: <FaWordpress/>},
            {icon: <FaJs/>},
            {icon: <FaPhp/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>}
        ]
    },

    {
        letter:'J',
        title:'J & A Hair Studio',
        type:'Personal',
        link:'https://jandahairstudio.ca',
        media:'/images/projects/ja.jpg',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo est, accumsan vitae egestas ac, luctus id elit. Ut nibh augue, posuere vitae tincidunt ac, fringilla quis justo. Mauris sit amet ornare lacus. Duis non nisi ultrices, elementum nibh in, hendrerit velit. Curabitur diam felis, interdum",
        languages:[
            {icon: <FaReact/>},
            {icon: <FaJs/>},
            {icon: <FaPhp/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>}
        ]
    },

    {
        letter:'D',
        title:'Reataurant POS System',
        type:'Personal',
        link:'https://www.dosacrepecafe.com/',
        media:'/images/projects/dosa.jpg',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo est, accumsan vitae egestas ac, luctus id elit. Ut nibh augue, posuere vitae tincidunt ac, fringilla quis justo. Mauris sit amet ornare lacus. Duis non nisi ultrices, elementum nibh in, hendrerit velit. Curabitur diam felis, interdum",
        languages:[
            {icon: <FaJs/>},
            {icon: <FaWordpress/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>}
        ]
    },

    {
        letter:'T',
        title:'The School Concierge',
        type:'At Navigator Multimedia',
        link:'https://theschoolconcierge.com/',
        media:'/images/projects/tsc.png',
        description:"The School ConciergeLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo est, accumsan vitae egestas ac, luctus id elit. Ut nibh augue, posuere vitae tincidunt ac, fringilla quis justo. Mauris sit amet ornare lacus. Duis non nisi ultrices, elementum nibh in, hendrerit velit. Curabitur diam felis, interdum",
        languages:[
            {icon: <FaAngular/>},
            {icon: <FaPhp/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>}
        ]
    },

    {
        letter:'T',
        title:'The School Concierge',
        type:'At Navigator Multimedia',
        link:'https://theschoolconcierge.com/',
        media:'/images/projects/tsc.png',
        description:"The School ConciergeLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo est, accumsan vitae egestas ac, luctus id elit. Ut nibh augue, posuere vitae tincidunt ac, fringilla quis justo. Mauris sit amet ornare lacus. Duis non nisi ultrices, elementum nibh in, hendrerit velit. Curabitur diam felis, interdum",
        languages:[
            {icon: <FaAngular/>},
            {icon: <FaPhp/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>}
        ]
    },

    {
        letter:'A',
        title:'Athletictherapy BC',
        type:'At Navigator Multimedia',
        link:'https://www.athletictherapybc.ca/',
        media:'/images/projects/atabc.jpg',
        description:"Athletic Therapy BC ipsum dolor sit amet, consectetur adipiscing elit. Proin leo est, accumsan vitae egestas ac, luctus id elit. Ut nibh augue, posuere vitae tincidunt ac, fringilla quis justo. Mauris sit amet ornare lacus. Duis non nisi ultrices, elementum nibh in, hendrerit velit. Curabitur diam felis, interdum",
        languages:[
            {icon: <FaWordpress/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>}
        ]
    },
    {
        letter:'L',
        title:'ROAD TRIPS',
        type:'At Navigator Multimedia',
        link:'https://www.kootenayrockies.com/roadtrips/',
        media:'/images/projects/kr.png',
        description:"Athletic Therapy BC ipsum dolor sit amet, consectetur adipiscing elit. Proin leo est, accumsan vitae egestas ac, luctus id elit. Ut nibh augue, posuere vitae tincidunt ac, fringilla quis justo. Mauris sit amet ornare lacus. Duis non nisi ultrices, elementum nibh in, hendrerit velit. Curabitur diam felis, interdum",
        languages:[
            {icon: <FaWordpress/>},
            {icon: <FaGoogle/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>}
        ]
    },
    {
        letter:'T',
        title:'Custom E Store',
        type:'At Navigator Multimedia',
        link:'https://www.tropicaladventurestravel.com/trip/raja-ampat-indonesia',
        media:'/images/projects/ta.jpg',
        description:"Athletic Therapy BC ipsum dolor sit amet, consectetur adipiscing elit. Proin leo est, accumsan vitae egestas ac, luctus id elit. Ut nibh augue, posuere vitae tincidunt ac, fringilla quis justo. Mauris sit amet ornare lacus. Duis non nisi ultrices, elementum nibh in, hendrerit velit. Curabitur diam felis, interdum",
        languages:[
            {icon: <FaWordpress/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>}
        ]
    },

    {
        letter:'T',
        title:'Image Bank',
        type:'At Navigator Multimedia',
        link:'https://imagebank.travelpenticton.com/',
        media:'/images/projects/tp.jpg',
        description:"Athletic Therapy BC ipsum dolor sit amet, consectetur adipiscing elit. Proin leo est, accumsan vitae egestas ac, luctus id elit. Ut nibh augue, posuere vitae tincidunt ac, fringilla quis justo. Mauris sit amet ornare lacus. Duis non nisi ultrices, elementum nibh in, hendrerit velit. Curabitur diam felis, interdum",
        languages:[
            {icon: <FaWordpress/>},
            {icon: <FaJs/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>}
        ]
    },

    {
        letter:'S',
        title:'Speedy Cash Animations',
        type:'At Navigator Multimedia',
        link:'https://www.speedycash.ca/',
        media:'/images/projects/s.jpg',
        description:"Athletic Therapy BC ipsum dolor sit amet, consectetur adipiscing elit. Proin leo est, accumsan vitae egestas ac, luctus id elit. Ut nibh augue, posuere vitae tincidunt ac, fringilla quis justo. Mauris sit amet ornare lacus. Duis non nisi ultrices, elementum nibh in, hendrerit velit. Curabitur diam felis, interdum",
        languages:[
            {icon: <FaWordpress/>},
            {icon: <FaJs/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>}
        ]
    },

    {
        letter:'K',
        title:'Document Storage Application',
        type:'At Navigator Multimedia',
        link:'https://www.privateaccess.kghfoundation.com/',
        media:'/images/projects/kg.png',
        description:"Athletic Therapy BC ipsum dolor sit amet, consectetur adipiscing elit. Proin leo est, accumsan vitae egestas ac, luctus id elit. Ut nibh augue, posuere vitae tincidunt ac, fringilla quis justo. Mauris sit amet ornare lacus. Duis non nisi ultrices, elementum nibh in, hendrerit velit. Curabitur diam felis, interdum",
        languages:[
            {icon: <FaWordpress/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>}
        ]
    },

    {
        letter:'V',
        title:'Events Booking Application',
        type:'At Navigator Multimedia',
        link:'https://www.vernonphysiciansociety.ca/calendar/',
        media:'/images/projects/v.jpg',
        description:"Athletic Therapy BC ipsum dolor sit amet, consectetur adipiscing elit. Proin leo est, accumsan vitae egestas ac, luctus id elit. Ut nibh augue, posuere vitae tincidunt ac, fringilla quis justo. Mauris sit amet ornare lacus. Duis non nisi ultrices, elementum nibh in, hendrerit velit. Curabitur diam felis, interdum",
        languages:[
            {icon: <FaWordpress/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>}
        ]
    }

];

const ProjectsHTML = () => {
    const List = objProject.map((item, index)=>
        <ProjectCards 
            title = {item.title}
            type = {item.type}
            language = {item.language}
            api = {item.api}
            link = {item.link}
            letter = {item.letter}
            media = {item.media}
            languages = {item.languages}
            description = {item.description}
        />
    );    
    return List;
};

export default class Projects extends Component{
    render(){
        return(
            <div className = "page-container projects">
                <h1>PROJECTS</h1>
                <Row>
                    <ProjectsHTML/>
                </Row>
            </div>
        )
    }
}