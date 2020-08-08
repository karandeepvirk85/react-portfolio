import React, {Component} from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const ShareProfile = () =>{
    return(
        <>
            <a target="blank" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=www.karandeepvirk.com&amp;title=&amp;summary="><LinkedInIcon/></a>
            <a target="blank" href="https://www.facebook.com/sharer/sharer.php?u=wwww.karandeepvirk.com"><FacebookIcon/></a>
            <a target="blank" href="https://twitter.com/intent/tweet?text=&amp;url=www.karandeepvirk.com&amp;via="><TwitterIcon/></a>
            <a target="blank" href="mailto:someone@yoursite.com?subject=Sharing Profile Of Karandeep Virk&body=karandeepvirk.com"><MailOutlineIcon/></a>
        </>
    )
}
export default ShareProfile;