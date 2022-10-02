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
        letter: "G",
        title: "Google Transit Bus Feed",
        type: "At Navigator Multimedia",
        link: "https://www.google.com/maps/dir/Jasper,+Alberta+T0E+1E0/edmonton/@53.203329,-118.0033668,7z/data=!4m13!4m12!1m5!1m1!1s0x53832b0868553e29:0x1f2002bd0b192882!2m2!1d-118.0813581!2d52.8736786!1m5!1m1!1s0x53a0224580deff23:0x411fa00c4af6155d!2m2!1d-113.4937266!2d53.5460983",
        media: "/images/projects/googlebus.png",
        description:
            "I have added google transit bus feed. Inorder to add feed I had to work with google employee. I created data structure in different CSV files.",
        languages: [

            { icon: <FaGoogle/> },
        ],
    },

    {
        letter: "O",
        title: "Google Map Trails On Scroll",
        type: "At Navigator Multimedia",
        link: "https://www.originspringcreek.com/destination-location/?view=large",
        media: "/images/projects/origin.png",
        description:
            "I have created animated Google Map Trail by working on google map JavaScript. When user scrolls it shows images and desription of locations along with google map trail animation in Spring Creek.",
        languages: [
            { icon: <FaSass /> },
            { icon: <FaHtml5 /> },
            { icon: <FaCss3Alt /> },
            { icon: <FaGoogle /> },
        ],
    },
    {
        letter: "B",
        title: "BC Golf Guide",
        type: "At Navigator Multimedia",
        link: "https://www.bcgolfguide.com/",
        media: "/images/projects/bcgolf.png",
        description:
            "Developed Whole Website from designed Mockup. I have added Packages, Map, Blog, etc",
        languages: [
            { icon: <FaPhp /> },
            { icon: <FaSass /> },
            { icon: <FaHtml5 /> },
            { icon: <FaCss3Alt /> },
            { icon: <FaPaypal /> },
        ],
    },

    {
        letter: "B",
        title: "Blue Imp",
        type: "At Navigator Multimedia",
        link: "https://www.blueimp.com/",
        media: "/images/projects/blueimp.png",
        description:
            "Worked on different features. Added color selection option, images carousel, lazy Loading.",
        languages: [
            { icon: <FaPhp /> },
            { icon: <FaSass /> },
            { icon: <FaHtml5 /> },
            { icon: <FaCss3Alt /> }
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
                <h1>KEY PROJECTS</h1>
                <Row>
                    <ProjectsHTML />
                </Row>
            </div>
        );
    }
}
