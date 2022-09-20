import React, { Component } from "react";
import ProjectCards from "./projectcards.component.js";
import { Row } from "react-bootstrap";
import {
    FaWordpress,
    FaJs,
    FaPhp,
    FaPaypal,
    FaSass,
    FaHtml5,
    FaCss3Alt,
    FaAngular,
    FaGoogle,
} from "react-icons/fa";

const objProject = [
    {
        letter: "B",
        title: "BC Rail Trails",
        type: "At Navigator Multimedia",
        link: "https://www.bcrailtrails.com",
        media: "/images/projects/bc.jpg",
        description:
            "I have developed User Interface from designed mock up and added Custom Post Types, Quiz, Trails Management, etc",
        languages: [
            { icon: <FaWordpress /> },
            { icon: <FaGoogle /> },
            { icon: <FaSass /> },
            { icon: <FaHtml5 /> },
            { icon: <FaCss3Alt /> },
        ],
    },

    {
        letter: "L",
        title: "ROAD TRIPS",
        type: "At Navigator Multimedia",
        link: "https://www.kootenayrockies.com/roadtrips/",
        media: "/images/projects/kr.png",
        description:
            "I had fully developed Road Trips module of this application using Google Map technologies such as POLYGON, WAYPOINTS, MARKERS, Wrote custom scripts and SASS for animations and views etc. Added full backend control with AutoComplete and drag options to change the order of different partners.",
        languages: [
            { icon: <FaWordpress /> },
            { icon: <FaGoogle /> },
            { icon: <FaSass /> },
            { icon: <FaHtml5 /> },
            { icon: <FaCss3Alt /> },
        ],
    },

    {
        letter: "T",
        title: "Custom E Store",
        type: "At Navigator Multimedia",
        link: "https://www.tropicaladventurestravel.com/trip/raja-ampat-indonesia",
        media: "/images/projects/ta.jpg",
        description:
            "I have designed and developed this application and built Custom E Cart from scratch. In this application user can make partial deposit before buying tour. The next payment user can pay any time using Order Key. It also has email notifications with Admin controls.",
        languages: [
            { icon: <FaWordpress /> },
            { icon: <FaSass /> },
            { icon: <FaHtml5 /> },
            { icon: <FaCss3Alt /> },
            { icon: <FaPaypal /> },
        ],
    },
    {
        letter: "T",
        title: "The School Concierge",
        type: "At Navigator Multimedia",
        link: "https://theschoolconcierge.com/",
        media: "/images/projects/tsc.png",
        description:
            "The School Concierge is a kids hot lunch program for parents and schools. Application front and backend is developed in Angular JS. I had added various componet to the application such as Media Library, Scheduling hot lunch, Different views for different users, Handled JSON data back and forth with API.",
        languages: [
            { icon: <FaAngular /> },
            { icon: <FaPhp /> },
            { icon: <FaSass /> },
            { icon: <FaHtml5 /> },
            { icon: <FaCss3Alt /> },
            { icon: <FaPaypal /> },
        ],
    },

    {
        letter: "W",
        title: "My Own WP Custom Theme",
        type: "Personal",
        link: "https://github.com/karandeepvirk85/Wordpress-Default-Framework/tree/branch",
        media: "/images/projects/wp.png",
        description:
            "I designed & developed my own custom WordPress Theme and Plugin from scratch. I wrote Object Oriented code and added various controllers such as Fields, Settings, Custom Post type Controllers, etc. I also added payment page integrated with Stripe. You can view here http://global-immigration.ca/",
        languages: [
            { icon: <FaAngular /> },
            { icon: <FaPhp /> },
            { icon: <FaSass /> },
            { icon: <FaHtml5 /> },
            { icon: <FaCss3Alt /> },
            { icon: <FaPaypal /> },
        ],
    },

    {
        letter: "V",
        title: "Events Booking Application",
        type: "At Navigator Multimedia",
        link: "https://www.vernonphysiciansociety.ca/calendar/",
        media: "/images/projects/v.jpg",
        description:
            "Vernon Physician Society Bootstrap Calendar integrated with Wordpress Backend. Admin can add different meals to each event and can view the booking. Whereas users can book and cancel the event using unique key generated and emailed to them. integration with Google Calendar.",
        languages: [
            { icon: <FaWordpress /> },
            { icon: <FaSass /> },
            { icon: <FaHtml5 /> },
            { icon: <FaCss3Alt /> },
        ],
    },

    {
        letter: "T",
        title: "Image Bank",
        type: "At Navigator Multimedia",
        link: "https://imagebank.travelpenticton.com/",
        media: "/images/projects/tp.jpg",
        description:
            "I had developed Travel Penticton Image Bank JavaScript Application. Users can add images to their account and download images.",
        languages: [
            { icon: <FaWordpress /> },
            { icon: <FaJs /> },
            { icon: <FaSass /> },
            { icon: <FaHtml5 /> },
            { icon: <FaCss3Alt /> },
        ],
    },

    {
        letter: "S",
        title: "Speedy Cash Animations",
        type: "At Navigator Multimedia",
        link: "https://www.speedycash.ca/",
        media: "/images/projects/s.jpg",
        description:
            "Added JavaScript Custom Animations and added front payment module with their back end third party API.",
        languages: [
            { icon: <FaWordpress /> },
            { icon: <FaJs /> },
            { icon: <FaSass /> },
            { icon: <FaHtml5 /> },
            { icon: <FaCss3Alt /> },
        ],
    }
];

const ProjectsHTML = () => {
    const List = objProject.map((item, index) => (
        <ProjectCards
            title={item.title}
            type={item.type}
            language={item.language}
            api={item.api}
            link={item.link}
            letter={item.letter}
            media={item.media}
            languages={item.languages}
            description={item.description}
        />
    ));
    return List;
};

export default class Projects extends Component {
    render() {
        return (
            <div className="page-container projects">
                <h1>PROJECTS</h1>
                <Row>
                    <ProjectsHTML />
                </Row>
            </div>
        );
    }
}
