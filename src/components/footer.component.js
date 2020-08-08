import React,{Component} from 'react';
import ShareProfile from '../components/share.component.js';
import ShareIcon from '@material-ui/icons/Share';
export default class Footer extends Component{
    render(){
        return(
            <>
                <div className="footer">
                    <div className="footer-left">
                        <div className="user-profile">
                            <p className="text-center">Designed and Developed By Karandeep Virk </p> 
                        </div>
                    </div>
                    <div className="footer-right">
                        <p className="text-center">Share Profile<ShareIcon/></p>
                        <div className="share-profile">
                            <ShareProfile/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}