import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Zvonimir Horvat
        </Typography>
        <AppsIcon />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
