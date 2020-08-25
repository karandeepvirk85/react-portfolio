import React, { Component } from "react";
import { CircularIndeterminate } from "./utility/utility.component.js";
const apiURL =
    "http://api.weatherstack.com/current?access_key=118ae81ad4369c2bff1f11b25852915c&query=Vancouver";

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
        };
    }

    /**
     * Get Wather API
     *
     */
    componentDidMount() {
        fetch(apiURL)
            .then((response) => response.json())
            .then((result) => {
                this.setState({ isLoading: false, data: result });
            });
    }

    getWeather = () => {
        return (
            <>
                <h1>{console.log(this.data)}</h1>
            </>
        );
    };

    render() {
        return (
            <>
                {this.state.isLoading && <CircularIndeterminate />}
                {!this.state.isLoading && this.getWeather()}
            </>
        );
    }
}
