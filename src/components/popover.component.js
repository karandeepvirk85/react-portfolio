import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {FaFilePdf, FaFileWord } from 'react-icons/fa';
import Cardbusiness from '@material-ui/icons/FeaturedPlayList';  
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import WorkIcon from '@material-ui/icons/Work';
import BuildIcon from '@material-ui/icons/Build';
import SchoolIcon from '@material-ui/icons/School';
import PhotoCameraIcon from '@material-ui/icons/PhotoLibrary';
import InstagramIcon from '@material-ui/icons/Instagram';
import FbIcon from '@material-ui/icons/Facebook';
import {FaIdCard} from 'react-icons/fa';
import TwitterIcon from '@material-ui/icons/Twitter';
import VideocamIcon from '@material-ui/icons/Videocam';
const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
    fontSize:'2rem'
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const getIcon = (icon) =>{
    if(icon == "IconDownload"){
        return <FaFilePdf className="d-none d-sm-block"/>
    }
    if(icon=="IconDocX"){
      return <FaFileWord className="d-none d-sm-block"/>
    }

    if(icon == "CardBusiness"){
        return <Cardbusiness className="d-none d-sm-block"/>
    }

    if(icon == "Contact"){
        return <PermPhoneMsgIcon className="d-none d-sm-block"/>
    }

    if(icon == "AccountTreeIcon"){
        return <AccountTreeIcon className="d-none d-sm-block"/>
    }

    if(icon == "multimedia"){
        return <VideocamIcon className="d-none d-sm-block"/>
    }

    if(icon == "WorkIcon"){
        return <WorkIcon className="d-none d-sm-block"/>
    }

    if(icon == "BuildIcon"){
        return <BuildIcon className="d-none d-sm-block"/>
    }

    if(icon == "SchoolIcon"){
        return <SchoolIcon className="d-none d-sm-block"/>
    }
    if(icon=="PhotoCameraIcon"){
        return <PhotoCameraIcon className="d-none d-sm-block"/>
    }
    if(icon=="instagram"){
        return <InstagramIcon className="d-none d-sm-block"/>
    }
    if(icon=="fbIcon"){
        return <FbIcon className="d-none d-sm-block"/>
    }
    if(icon=="IdCard"){
        return <FaIdCard className="d-none d-sm-block"/>
    }
    if(icon=="twitter"){
        return <TwitterIcon className="d-none d-sm-block" />
    }  
}

const getText = (text) =>{
    return(
        <Typography>{text}</Typography>
    )
}
export default function MouseOverPopover(props){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return(
        <div>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                {getIcon(props.icon)}
            </Typography>

            <Popover
                id="mouse-over-popover"
                className= {classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}

                onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                {getText(props.text)}
            </Popover>
        </div>
    );
    }