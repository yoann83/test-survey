import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";

export default function ({ inputType, name, title, onChange, ...props }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
    setTimeout(() => {
      setOpen((prev) => placement !== newPlacement || !prev);
    }, 3000);
  };
  const [value, setValue] = useState("");
  const onSelectChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    /* construct (overloard) all components (ex : material ui) */
    <div className="text">
      <div className="icons">
        <i className="fa fa-id-card" aria-hidden="true"></i>
      </div>
      <TextField
        fullWidth
        {...props}
        onChange={onSelectChange}
        value={value}
        multiline={inputType === "comment" ? true : false}
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
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Typography className="popper" sx={{ p: 2 }}>
                  <span className="h5">
                    The content of the <dfn>{name}</dfn>
                  </span>
                  <span className="text">Text textField help here...</span>
                </Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    </div>
  );
}
