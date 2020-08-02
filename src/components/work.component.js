import React,{Component} from 'react';

class Work extends Component{
    render(){
        return(
            <div className="page-container work">
                <NaigatorText/>
                <InfoWiz/>
            </div>
        );
    }
}

const NaigatorText = () => {
    return(
        <>
            <h2>Programmer</h2>
            <div className="job-address">
                <h3>Navigator Multimedia, Kelowna BC, CANADA <span>July 2017 - April 2020</span></h3>
            </div>
            <ul>
                <li>Designed and developed donation application with recurring payments, developed tours and travel reservation system, online events ticketing software, season passes applications, secure login and registration systems, auction application, image banks, membership websites of different user levels, views, and roles.</li>
                <li>Integrated payment gateways and CRMs with more than 20 applications using raw API calls and SDK kits such as Stripe, PayPal Standard, Paypal Pro, and Elavon, Solve 360, Constant Contact, Mailchimp, Pipedrive, Lasso.</li>
                <li>Developed online document storage applications, integrated FedEx, and UPS using WordPress plugins.</li>
                <li>Improved and developed e-commerce stores with tax receipts, a redesigned data structure for furniture distributors.</li>
                <li>Generated quizzes using neural network logics, road maintenance websites, hotel rooms booking application using WordPress custom posts.</li>
                <li>Managed more than 30 WordPress websites at a time and created themes, plugins, widgets, and templates.</li>
                <li>Learned to interact with clients and gained experience, resolved conflicts, and assisted other front end developers to implement client’s ideas and increased their revenue.</li>
                <li>Used Google technologies such as Markers, Trails, Polylines, Polygon, Way Points, Clusters, Google Calendar, ReCaptcha v3.</li>
                <li>Re-skinned existing websites integrated with MySQL, MS SQL, under an Agile development environment.</li>
                <li>UI and UX Coding using Bootstrap, Sass, CSS, Jquery, JavaScript, React JS, Materials-UI. Translated requirements and design mock-ups into fully functioning web pages.</li>
                <li>Worked on Git repositories such as creating a repo, merging branches into their target branches and pushing branches to their remote repositories, cloning remote branches, and switching to it, pushing changes to remote repositories and synchronization.</li>
                <li>Sorting, searching, filters, autocomplete, pagination, webhooks, email templates, SVG Interactive Map, generated XML, Data import, and export in different file formats like PDF, CSV, Excel, Web hosting, domains transfers, SSL layers, bash scripts, Xampp and Lamp server.</li>
                <li>DRY, MVC Coding with semantic HTML format, manipulated JSON responses, Integrated modules to existing applications.</li>
                <li>Handled and modeled data to discover useful information with graphical representation for business decision-making.</li>
                <li>Analyzed and debugged social website feed by using their APIs, for example Facebook Graph API, Instagram, LinkedIn Profile API, Twitter, Tripadvisor, etc.</li>
                <li>Used e-commerce API such as Checkfront, ZAUI, Woo-Commerce,  etc.</li>
            </ul>
        </>
    )
}

const InfoWiz = () => {
    return(
        <>
            <h2>Software Developer</h2>
            <div className="job-address">
                <h3>Infowiz Software Solution, Chandigarh, India <span>October 2011 - January 2015</span></h3>
            </div>
            <ul>
                <li>Designed over 20 applications for clients in different industries including medical, fashion, real estate, retail, industrial, and more. </li>
                <li>Designed business process documentation, identified various stakeholders for the system, and validated all elements of the requirement specifications document (SRS).</li>
                <li>Applied multi-paradigm software development methodology such as Unified Modelling Language (UML), Modularity, Reusability, Waterfall model, and Agile development. </li>
                <li>Oversaw a wide variety of projects in everything from Node JS to Flex to custom GIS mapping application.</li>
            </ul>
        </>
    )
}

export default Work;