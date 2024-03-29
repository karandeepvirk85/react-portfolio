import React, { Component } from "react";
import { CircularIndeterminate } from "./utility/utility.component.js";
import { newsApi } from "./constants/constants.component.js";

export default class NewsBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderSpinner: true,
            news: null,
        };
    }

    componentDidMount() {
        fetch(newsApi)
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    renderSpinner: false,
                    news: result,
                });
            });
    }
    viewNews = (url) => {
        window.open(url);
    };

    getAllNews = () => {
        if (this.state.news != null) {
            let objData = this.state.news;
            const List = objData.map((item, index) => (
                <div
                    className="news-box"
                    onClick={(e) => {
                        this.viewNews(item.news_url);
                    }}
                >
                    <div
                        className="news-image"
                        style={{
                            backgroundImage: "url(" + item.news_image + ")",
                            backgroundPosition: "left",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <h2>{item.title}</h2>
                    <p className="date">{item.published_at}</p>
                    <p>{item.description}</p>
                    {item.author_name != undefined && (
                        <p className="date">By {item.author_name}</p>
                    )}
                </div>
            ));
            return List;
        }
    };

    render() {
        return (
            <>
                {this.state.renderSpinner && <CircularIndeterminate />}
                {!this.state.renderSpinner && this.getAllNews()}
            </>
        );
    }
}
