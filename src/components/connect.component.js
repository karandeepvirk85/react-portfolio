import React, {Component} from "react";
import Instagram from './instagram.component';
import Facebook from './facebook.component';
import LinkedIn from './linkedin.component.js';

class Connect extends Component{
    render(){
        return(
            <>
                <div className = "page-container connect">
                    <Instagram/>
                    <LinkedIn/>
                    <Facebook/>
                </div>
            </>
        )
    }
}

export default Connect;