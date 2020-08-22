import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import PopOver from "../components/popover.component.js";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Avatar from "../components/avatar.component.js";
import About from "./about.component.js";
import Blog from "./blogs.component.js";
import Gallery from "../components/gallery.component.js";
import Skills from "../components/skills.component.js";
import Work from "../components/work.component.js";
import Instagram from "../components/instagram.component.js";
import Education from "../components/education.component.js";
import Facebook from "../components/facebook.component.js";
import Project from "./projects.component.js";
import Contact from "./contact.component.js";
import Twitter from "./twitter.component.js";
import { DownLoadDocument } from "../components/utility/utility.component.js";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import {
    FaChevronDown,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaLinkedin,
    FaUser,
} from "react-icons/fa";
import Single from "./single.component.js";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

const MenuListComposition = () => {
    const [expanded, setExpanded] = useState(false);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openDownload, setOpenDownload] = React.useState(false);
    const anchorRef = React.useRef(null);
    const anchorRefDownload = React.useRef(null);

    const handleToggle = () => {
        setOpenDownload(false);
        setOpen((prevOpen) => !prevOpen);
    };

    const handleToggleDownload = () => {
        setOpen(false);
        setOpenDownload((prevOpenDownload) => !prevOpenDownload);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        if (
            anchorRefDownload.current &&
            anchorRefDownload.current.contains(event.target)
        ) {
            return;
        }
        setOpen(false);
        setOpenDownload(false);
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
            setOpenDownload(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    const prevOpenDownload = React.useRef(openDownload);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    React.useEffect(() => {
        if (prevOpenDownload.current === true && openDownload === false) {
            anchorRefDownload.current.focus();
        }
        prevOpenDownload.current = openDownload;
    }, [openDownload]);

    return (
        <div className={classes.root}>
            <div className="top-bar-menu">
                <Button
                    ref={anchorRefDownload}
                    aria-controls={openDownload ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggleDownload}
                    className="nice-dark-button"
                >
                    Download <FaChevronDown />
                </Button>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    className="nice-dark-button"
                >
                    Follow Me <FaChevronDown />
                </Button>

                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === "bottom"
                                        ? "center top"
                                        : "center bottom",
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="menu-list-grow"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            <Link
                                                onClick={() =>
                                                    setExpanded(false)
                                                }
                                                className="nav-link"
                                                to="/facebook"
                                            >
                                                <FaFacebook /> Facebook
                                            </Link>
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <Link
                                                onClick={() =>
                                                    setExpanded(false)
                                                }
                                                className="nav-link"
                                                to="/instagram"
                                            >
                                                <FaInstagram /> Instagram
                                            </Link>
                                        </MenuItem>

                                        <MenuItem onClick={handleClose}>
                                            <Link
                                                onClick={() =>
                                                    setExpanded(false)
                                                }
                                                className="nav-link"
                                                to="/twitter"
                                            >
                                                <FaTwitter /> Twitter
                                            </Link>
                                        </MenuItem>

                                        <MenuItem onClick={handleClose}>
                                            <Nav.Link
                                                href="https://github.com/karandeepvirk85"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                <FaGithub /> Github
                                            </Nav.Link>
                                        </MenuItem>

                                        <MenuItem onClick={handleClose}>
                                            <Nav.Link
                                                href="https://www.linkedin.com/in/kv85/"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                <FaLinkedin /> LinkedIn
                                            </Nav.Link>
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>

                <Popper
                    open={openDownload}
                    anchorEl={anchorRefDownload.current}
                    role={undefined}
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === "bottom"
                                        ? "center top"
                                        : "center bottom",
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={openDownload}
                                        id="menu-list-grow"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            <Link
                                                className="nav-link"
                                                onClick={(e) => {
                                                    DownLoadDocument(
                                                        "/documents/Karandeep_Virk.pdf",
                                                        e
                                                    );
                                                }}
                                            >
                                                PDF Resume
                                            </Link>
                                        </MenuItem>

                                        <MenuItem onClick={handleClose}>
                                            <Link
                                                className="nav-link"
                                                onClick={(e) => {
                                                    DownLoadDocument(
                                                        "/documents/Karandeep_Virk.docx",
                                                        e
                                                    );
                                                }}
                                            >
                                                DOCX Resume
                                            </Link>
                                        </MenuItem>

                                        <MenuItem onClick={handleClose}>
                                            <Link
                                                className="nav-link"
                                                onClick={(e) => {
                                                    DownLoadDocument(
                                                        "/documents/vcard.png",
                                                        e
                                                    );
                                                }}
                                            >
                                                V Card
                                            </Link>
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
};

const TopNavigationBar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Router>
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="dark"
                expanded={expanded}
            >
                <Link to="/about">
                    <Avatar /> Karandeep Virk
                </Link>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link
                            onClick={() => setExpanded(false)}
                            className="nav-link"
                            to="/"
                        >
                            <PopOver icon="Home" text="Blog" />
                            <p className="d-block margin-0 d-lg-none">Blog</p>
                        </Link>
                        <Link
                            onClick={() => setExpanded(false)}
                            className="nav-link"
                            to="/education"
                        >
                            <PopOver icon="SchoolIcon" text="Education" />
                            <p className="d-block margin-0 d-lg-none">
                                Education
                            </p>
                        </Link>
                        <Link
                            onClick={() => setExpanded(false)}
                            className="nav-link"
                            to="/work"
                        >
                            <PopOver icon="WorkIcon" text="Work Experience" />
                            <p className="d-block margin-0 d-lg-none">Work</p>
                        </Link>
                        <Link
                            onClick={() => setExpanded(false)}
                            className="nav-link"
                            to="/projects"
                        >
                            <PopOver icon="AccountTreeIcon" text="Projects" />
                            <p className="d-block margin-0 d-lg-none">
                                Projects
                            </p>
                        </Link>

                        <Link
                            onClick={() => setExpanded(false)}
                            className="skills-link nav-link"
                            to="/skills"
                        >
                            <PopOver icon="BuildIcon" text="Skills" />
                            <p className="d-block margin-0 d-lg-none">Skills</p>
                        </Link>

                        <Link
                            onClick={() => setExpanded(false)}
                            className="nav-link"
                            to="/gallery"
                        >
                            <PopOver
                                icon="PhotoCameraIcon"
                                text="Photography"
                            />
                            <p className="d-block margin-0 d-lg-none">
                                Photography
                            </p>
                        </Link>

                        <Link
                            onClick={() => setExpanded(false)}
                            className="nav-link"
                            to="/contact"
                        >
                            <PopOver icon="Contact" text="Contact" />
                            <p className="d-block margin-0 d-lg-none">
                                Contact
                            </p>
                        </Link>

                        <Link
                            onClick={() => setExpanded(false)}
                            className="nav-link"
                            to="/about"
                        >
                            <PopOver icon="About" text="About Me" />
                            <p className="d-block margin-0 d-lg-none">
                                About me
                            </p>
                        </Link>
                        <MenuListComposition />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route path="/" exact component={Blog} />
                <Route path="/about" component={About} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/skills" component={Skills} />
                <Route path="/work" component={Work} />
                <Route path="/instagram" component={Instagram} />
                <Route path="/education" component={Education} />
                <Route path="/facebook" component={Facebook} />
                <Route path="/projects" component={Project} />
                <Route path="/contact" component={Contact} />
                <Route path="/twitter" component={Twitter} />
                <Route
                    path="/post/:slug"
                    render={(props) => <Single {...props} />}
                />
            </Switch>
        </Router>
    );
};
export default TopNavigationBar;
