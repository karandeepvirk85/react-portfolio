import React, { Component } from "react";

class Work extends Component {
    render() {
        return (
            <div className="page-container work">
                <h1>WORK EXPERIENCE</h1>
                <NaigatorText />
                <InfoWiz />
            </div>
        );
    }
}

const NaigatorText = () => {
    return (
        <>
            <h2>Programmer</h2>
            <div className="job-address">
                <h3>
                    Navigator Multimedia, Kelowna BC, CANADA{" "}
                    <span>July 2017 - April 2020</span>
                </h3>
            </div>
            <ul>
                <li>
                    Designed and developed donation application with recurring
                    payments, secure login and registration systems, document
                    storage application, auction application, image bank,
                    membership websites of different user levels, views, and
                    roles.
                </li>
                <li>
                    Payment gateways integration with Stripe, PayPal Standard,
                    Paypal Pro using raw API calls, PHP SDK, REST etc.
                </li>
                <li>
                    Experience with various WorPress plugins such as FedEx,
                    Elavon, Authorize.net, W3 Total Cache, Woocommerece
                    subscriptions, Elementor, Yoast SEO, ACF.
                </li>
                <li>
                    CRM Integration of Solve 360, Constant Contact, Mailchimp
                    and Lasso.
                </li>
                <li>
                    Developed WordPress plugins utilizing Custom Post Type such
                    as hotel booking plugin, tours and travel reservation
                    plugin, online events ticketing software, season passes
                    applications, Quizes, Surveys,etc
                </li>
                <li>
                    3+ years building a variety of Wordpress web applications.
                    Desined and developed Themes, Plugins, Widgets, and
                    Templates. Expertise in WP Query, Taxonomy and Meta Query,
                    Actions and Filters
                </li>
                <li>
                    Used Google technologies such as Markers, Trails, Polylines,
                    Polygon, Way Points, Clusters, Google Calendar, ReCaptcha
                    v3.
                </li>
                <li>
                    Learned to interact with clients and gained experience,
                    resolved conflicts, and assisted other developers to
                    implement client’s ideas and increased their revenue.
                </li>
                <li>
                    UI and UX Coding using Bootstrap, SASS, CSS, Jquery,
                    JavaScript, React JS, Materials-UI and translated
                    requirements and designed mock-ups into fully functioning
                    web sites under an Agile development environment.
                </li>
                <li>
                    Worked on Git repositories such as creating a repo, merging
                    branches into their target branches and pushing branches to
                    their remote repositories, cloning remote branches and
                    switching to it, pushing changes to remote repositories and
                    synchronization.
                </li>
                <li>
                    Sorting, searching, filters, autocomplete, pagination,
                    webhooks, email templates, SVG Interactive Map, generated
                    XML.
                </li>
                <li>
                    Data import and export in different file formats like CSV,
                    Excel. Dynamic PDF generation using TCPDF.
                </li>
                <li>
                    Experience with Web hosting, Domains transfers, SSL layers,
                    Bash scripts, Xampp and Lamp server.
                </li>
                <li>
                    DRY, MVC Coding with semantic HTML format, manipulated JSON
                    responses, Integrated modules to existing applications.
                </li>
                <li>
                    Handled and modeled data to discover useful information with
                    graphical representation for business decision-making.
                </li>
                <li>
                    Analyzed and debugged social website feed by using their
                    API's, for example Facebook Graph API, Instagram, LinkedIn
                    Profile API.
                </li>
                <li>
                    Experience with e-commerce API's such as Checkfront, ZAUI,
                    etc.
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
                    Infowiz Software Solution, Chandigarh, India{" "}
                    <span>October 2013 - January 2015</span>
                </h3>
            </div>
            <ul>
                <li>
                    Designed over 20 applications for clients in different
                    industries including medical, fashion, real estate, retail,
                    industrial, and more.{" "}
                </li>
                <li>
                    Designed business process documentation, identified various
                    stakeholders for the system, and validated all elements of
                    the requirement specifications document (SRS).
                </li>
                <li>
                    Applied multi-paradigm software development methodology such
                    as Unified Modelling Language (UML), Modularity,
                    Reusability, Waterfall model, and Agile development.{" "}
                </li>
            </ul>
        </>
    );
};

export default Work;
