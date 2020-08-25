import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { DownLoadDocument } from "../components/utility/utility.component.js";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                color="dark"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className="k-button"
            >
                Click to Download Documents <ArrowRightIcon />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={(e) => {
                        DownLoadDocument("/documents/Karandeep_Virk.pdf", e);
                    }}
                >
                    Download Resume{" "}
                </MenuItem>
                <MenuItem
                    onClick={(e) => {
                        DownLoadDocument("/documents/Cover_Letter.pdf", e);
                    }}
                >
                    {" "}
                    Download Cover Letter{" "}
                </MenuItem>
                <MenuItem
                    onClick={(e) => {
                        DownLoadDocument("/documents/vcard.png", e);
                    }}
                >
                    Visiting Card{" "}
                </MenuItem>
            </Menu>
        </div>
    );
}
