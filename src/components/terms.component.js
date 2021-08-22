import React, { Component } from "react";
import { CircularIndeterminate } from "./utility/utility.component.js";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { apiDomain } from "./constants/constants.component";
const apiUrl = apiDomain + "/wp-admin/admin-ajax.php?action=get_terms";

export default class Terms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderSpinner: true,
            terms: null,
        };
    }
    componentDidMount() {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => {
                this.setState({ renderSpinner: false, terms: result });
            });
    }

    getTerms = () => {
        if (this.state.terms != null) {
            let objData = this.state.terms;
            const List = objData.map((item, index) => (
                <Link to={"/category/" + item.slug}>
                    <span>{item.name}</span>
                </Link>
            ));
            return List;
        }
    };

    render() {
        return (
            <>
                {this.state.renderSpinner && (
                    <CircularIndeterminate className="text-center" />
                )}
                <Router>{!this.state.renderSpinner && this.getTerms()}</Router>
            </>
        );
    }
}
