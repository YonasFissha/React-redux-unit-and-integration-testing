import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
const useStyles = makeStyles({
  button: {
    marginTop: "10px",
    marginLeft: "4px",
    marginBottom: "10px",
  },
});
export const GetPostButton = ({ buttonText, fetchPosts }) => {
  const styles = useStyles();
  return (
    <Button
      variant="contained"
      data-test="getPostButton"
      color="primary"
      className={styles.button}
      onClick={() => {
        fetchPosts();
      }}
    >
      {buttonText}
    </Button>
  );
};
GetPostButton.propTypes = {
  buttonText: PropTypes.string,
  fetchPosts: PropTypes.func,
};

export default GetPostButton;
