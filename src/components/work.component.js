import React, { Component } from "react";

class Work extends Component {
    render() {
        return (
            <div className="page-container work">
                <h1>WORK EXPERIENCE</h1>
                <AlluraDirect />
                <NaigatorText />
                <InfoWiz />
            </div>
        );
    }
}

const AlluraDirect = () => {
    return (
        <>
            <h2>React Web Developer</h2>
            <div className="job-address">
                <h3>
                    AlluraDirect, Vancouver BC, CANADA
                    <span>Sep 2020 - Present</span>
                </h3>
            </div>
            <ul>
                <li>
                    Developed property manager dashboard interface using Formik,
                    bootstrap calendar, Type Script and ECMAScript (ES6), Jira,
                    Git and Postman to manage the properties, track the issues
                    and to control the versions of the project.
                </li>

                <li>Developed react functional components, custom hooks.</li>

                <li>
                    Managed project states and lifecycle with Redux also prop
                    drilled the states from one component to others.
                </li>

                <li>
                    Reviewed and requested code changes to improve the code
                    quality and maintain the code standard before merging the
                    Pull Request to master branch.
                </li>
            </ul>
        </>
    );
};

const NaigatorText = () => {
    return (
        <>
            <h2>Web Developer / Programmer</h2>
            <div className="job-address">
                <h3>
                    Navigator Multimedia, Kelowna BC, CANADA{" "}
                    <span>July 2016 - April 2020</span>
                </h3>
            </div>
            <ul>
                <li>
                    Converted designed mock-ups into fully functioning user
                    interface with Unit testing, Integrated Testing under
                    Sprints, Scrums and Agile development environment using
                    DevOps, Jira, Gitlab, GitHub.
                </li>

                <li>
                    Integrated various third-party Payments, CRM, Social and
                    Ecommerce REST APIs (Mentioned in Skills).
                </li>

                <li>
                    Learned to interact with clients and gained experience,
                    resolved conflicts, and assisted other developers to
                    implement the client’s ideas and increased their revenue.
                </li>

                <li>
                    Developed WordPress Themes and Plugins with different user
                    levels, views, and roles to solve complex logics and
                    problems for end users, stakeholders and local businesses
                    working collaboratively and collectively with DRY and MVC
                    coding using Semantic HTML.
                </li>

                <li>
                    Enhanced and Integrated Various WordPress plugins (Mentioned
                    in Skills) by adding custom fields, attributes, meta boxes,
                    etc.
                </li>

                <li>
                    Data Warehousing, Data normalization, Sorting, Searching,
                    Filters, Autocomplete, Social feeds, Cloud Computing,
                    Pagination, Webhooks, Email Templates, SVG Interactive Map,
                    XML Generation, Data import and export in different file
                    formats like CSV, Excel, Code Minification, dynamic PDF
                    generation using TCPDF, Quizzes in steps for users to choose
                    appropriate option such as events, trails, tours.
                </li>

                <li>
                    Ecommerce stores with Reoccurring payment, Partial payment,
                    Refund, Email notifications, Invoice generation, fully
                    functioning shopping cart integrated with Stripe, PayPal
                    Pro.
                </li>

                <li>
                    Implemented Google technologies such as Bus transit feed,
                    Markers, Trails, Polylines, Polygon, Waypoints, Clusters,
                    Info Windows, Shapes, KML, Geometry Library, Places Library
                    and Calendar.
                </li>
            </ul>
        </>
    );
};

const InfoWiz = () => {
    return (
        <>
            <h2>Software Developer</h2>
            <div className="job-address">
                <h3>
                    McNewton, IT Park, Chandigarh, INDIA
                    <span>&nbsp;Dec 2013 - January 2015</span>
                </h3>
            </div>
            <ul>
                <li>
                    Designed and developed e-Learning Web application for
                    students to learn programming using theme and SQL Server.
                </li>

                <li>
                    Designed and developed company website and learned basic
                    HTML, CSS, and Some concepts of JavaScript.
                </li>
                <li>
                    Assisted engineering students with coding and helped them to
                    pursue their computer science bachelor degree internship.
                </li>

                <li>
                    Designed business process documentation, identified various
                    stakeholders for the system, and validated all elements of
                    the requirement specifications document (SRS).
                </li>
                <li>
                    Applied multi-paradigm software development methodology such
                    as Unified Modelling Language (UML), Modularity,
                    Reusability, Waterfall model, and Agile development.
                </li>
            </ul>
        </>
    );
};

export default Work;
