import React, { Component } from "react";
import NewsBar from "./news.component.js";
import Terms from "./terms.component.js";

export default class SideBar extends Component {
    render() {
        return (
            <>
                <h2 className="text-left">TECH NEWS</h2>

                <div className="news-bar">
                    <NewsBar />
                </div>

                <h2 className="text-left">CATEGORIES</h2>
                <div className="category-bar">
                    <Terms />
                </div>
            </>
        );
    }
}
