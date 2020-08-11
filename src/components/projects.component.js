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
        description:"I have designed and developed the front end of this application using React JS and integrated with WordPress REST API. Users can add/remove different tours to their carts and make payments. Used JavaScript local storage variables, React Router, Coupling Modules , etc.",
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
        letter:'L',
        title:'ROAD TRIPS',
        type:'At Navigator Multimedia',
        link:'https://www.kootenayrockies.com/roadtrips/',
        media:'/images/projects/kr.png',
        description:"I had fully developed Road Trips module of this application using Google Map technologies such as POLYGON, WAYPOINTS, MARKERS, Wrote custom scripts and SASS for animations and views etc. Added full backend control with AutoComplete and drag options to change the order of different partners.",
        languages:[
            {icon: <FaWordpress/>},
            {icon: <FaGoogle/>},
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
        description:"I had designed and developed this Web application from designed mockup. The application back end was developed in WordPress using Custom POST types. Members can register themselves and pay for their yearly memberships. I had integrated this application with PayPal Pro.",
        languages:[
            {icon: <FaWordpress/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>},
            {icon:<FaPaypal/>}
        ]
    },
    {
        letter:'T',
        title:'Custom E Store',
        type:'At Navigator Multimedia',
        link:'https://www.tropicaladventurestravel.com/trip/raja-ampat-indonesia',
        media:'/images/projects/ta.jpg',
        description:"I have designed and developed this application and built Custom E Cart from scratch. In this application user can make partial deposit before buying tour. The next payment user can pay any time using Order Key. It also has email notifations with Admin controls.",
        languages:[
            {icon: <FaWordpress/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>},
            {icon:<FaPaypal/>}
        ]
    },
    {
        letter:'D',
        title: 'Reataurant POS System',
        type: 'Personal',
        link: 'http://system-preview.dosacrepecafe.com/',
        media:'/images/projects/dosa.jpg',
        description:"I had develoepd this pure JS application integrated with Wordpress and PHP. Developed WP Theme and Plugin from scratch. Admin can add discount, extra, control the Menu of the application and Orders. The payment method used was Stripe.",
        languages:[
            {icon: <FaJs/>},
            {icon: <FaWordpress/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>},
            {icon: <FaStripeS/>},
        ]
    },

    {
        letter:'A',
        title:'Apex Ski Club',
        type:'At Navigator Multimedia',
        link:'http://reg.apexskiclub.com',
        media:'/images/projects/apex.jpg',
        description:"Developed custom PHP application and Integrated with BC Alpine. This is a membership application in which Parent, Coach and  Alumni can register. They can also add their childrens and buy different programs for them. I had added various modules to the application such as Wavier Signing, Mass Email Communication, Adding, Editing, Updating members.",
        languages:[
            {icon: <FaAngular/>},
            {icon: <FaPhp/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>},
            {icon:<FaPaypal/>}
        ]
    },

    {
        letter:'J',
        title:'J & A Hair Studio',
        type:'Personal',
        link:'https://jandahairstudio.ca',
        media:'/images/projects/ja.jpg',
        description:"This is Kelowna based client. I had developed this application using React JS, SASS and Integrated various modules, Designed logo, Created logo video, Added Google feed, Captured pictures. etc",
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
        letter:'T',
        title:'The School Concierge',
        type:'At Navigator Multimedia',
        link:'https://theschoolconcierge.com/',
        media:'/images/projects/tsc.png',
        description:"The School Concierge is a kids hot lunch program for parents and schools. Application front and backend is developed in Angular JS. I had added various componet to the application such as Media Library, Scheduling hot lunch, Different views for different users, Handled JSON data back and forth with API.",
        languages:[
            {icon: <FaAngular/>},
            {icon: <FaPhp/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>},
            {icon:<FaPaypal/>}
        ]
    },

    {
        letter:'V',
        title:'Events Booking Application',
        type:'At Navigator Multimedia',
        link:'https://www.vernonphysiciansociety.ca/calendar/',
        media:'/images/projects/v.jpg',
        description:"Vernon Physician Society Bootstrap Calendar integrated with Wordpress Backend. Admin can add different meals to each event and can view the booking. Whereas users can book and cancel the event using unique key generated and emailed to them. integration with Google Calendar.",
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
        description:"I had developed Travel Penticton Image Bank JavaScript Application. Users can add images to their account and download images.",
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
        description:"Added JavaScript Custom Animations and added front payment module with their back end third party API.",
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
        description:" I had developed this PHP application in which users can Add, Update, Delete documents. Admin can control the access of the documents between users. ",
        languages:[
            {icon: <FaWordpress/>},
            {icon: <FaSass/>},
            {icon: <FaHtml5/>},
            {icon: <FaCss3Alt/>}
        ]
    },
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