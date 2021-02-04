import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function LinearIndeterminate() {
  const classes = useStyles();
  return (
    <div className="spinner-bar">
      <div className={classes.root}>
        <LinearProgress />
      </div>
    </div>
  );
}

function CircularIndeterminate() {
  const classes = useStyles();
  return (
    <div className="spinner-bar">
      <div className={classes.root}>
        <CircularProgress />
      </div>
    </div>
  );
}

const DownLoadDocument = (documentUrl, e) => {
  e.preventDefault();
  window.open(documentUrl);
};
// Decode HTML Data
const renderHTML = (strString) => {
  return React.createElement("div", {
    dangerouslySetInnerHTML: { __html: strString },
  });
};
export {
  DownLoadDocument,
  renderHTML,
  LinearIndeterminate,
  CircularIndeterminate,
};
