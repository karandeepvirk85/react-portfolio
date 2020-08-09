import React,{Component} from 'react';
import ShareProfile from '../components/share.component.js';
export default class Footer extends Component{
    render(){
        return(
            <>
                <div className="footer">
                    <div className="footer-left">Designed and Developed By Karandeep Virk</div>
                    <div className="footer-right"><ShareProfile/></div>
                </div>
            </>
        )
    }
}