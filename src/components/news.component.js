import React, { Component } from "react";
import { CircularIndeterminate } from "./utility/utility.component.js";
const ApiUrl =
    "http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-21&sortBy=publishedAt&apiKey=def4ca1eafa64c9bb9bf915e2cc8f2c7";
export default class NewsBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderSpinner: true,
            news: null,
        };
    }

    componentDidMount() {
        fetch(ApiUrl)
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    renderSpinner: false,
                    news: result.articles,
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
                        this.viewNews(item.url);
                    }}
                >
                    <div
                        className="news-image"
                        style={{
                            backgroundImage: "url(" + item.urlToImage + ")",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <h2>{item.title}</h2>
                    <p className="date">{item.publishedAt}</p>
                    <p>{item.description}</p>
                    {item.author != undefined && (
                        <p className="date">By {item.author}</p>
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
