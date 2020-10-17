import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    fontSize: "4.5rem",
    fontWeight: "bold",
    fontFamily: "Open Sans, sans-serif",
  },
  desc: {
    marginLeft: "4px",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "22px",
  },
});
const Headline = ({ header, desc }) => {
  const styles = useStyles();
  if (!header) {
    return null;
  }
  return (
    <Grid data-test="headlineComponent">
      <Typography variant="h1" data-test="header" className={styles.header}>
        {header}
      </Typography>
      <Typography variant="subtitle1" data-test="desc" className={styles.desc}>
        {desc}
      </Typography>
    </Grid>
  );
};

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
};

export default Headline;
