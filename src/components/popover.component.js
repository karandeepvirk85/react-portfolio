import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import IconDownload from '@material-ui/icons/PictureAsPdf';
import Cardbusiness from '@material-ui/icons/FeaturedPlayList';  
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import WorkIcon from '@material-ui/icons/Work';
import BuildIcon from '@material-ui/icons/Build';
import SchoolIcon from '@material-ui/icons/School';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

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
		return <IconDownload/>
	}

	if(icon == "CardBusiness"){
		return <Cardbusiness/>
	}

	if(icon == "Contact"){
		return <PermPhoneMsgIcon/>
	}
	
	if(icon == "AccountTreeIcon"){
		return <AccountTreeIcon/>
	}
	
	if(icon == "WorkIcon"){
		return <WorkIcon/>
	}

	if(icon == "BuildIcon"){
		return <BuildIcon/>
	}

	if(icon == "SchoolIcon"){
		return <SchoolIcon/>
	}
	if(icon=="PhotoCameraIcon"){
		return <PhotoCameraIcon/>
  }
  if(icon=="socialIcon"){
		return <InsertEmoticonIcon/>
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

  return (
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
        className={classes.popover}
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