import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";

export default function ({ helpTitle, helpText, ...props }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  return (
    /* construct (overloard) all components (ex : material ui) */
    <div className="text">
      <div className="icons">
        <i className="fa fa-id-card" aria-hidden="true"></i>
      </div>
      <TextField
        fullWidth={props.fullWidth}
        multiline={props.multiline}
        type={props.type}
        id={props.id}
        name={props.name}
        label={props.label}
        variant={props.variant}
        required={props.required}
      />
      <div className="icons">
        <i
          onClick={handleClick("top-start")}
          className="fa fa-question-circle"
          aria-hidden="true"
        ></i>
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={1000}>
              <Paper>
                <Typography className="popper" sx={{ p: 2 }}>
                  <span className="h5">
                    <dfn>{helpTitle}</dfn>
                  </span>
                  <span className="text">{helpText}</span>
                </Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    </div>
  );
}
