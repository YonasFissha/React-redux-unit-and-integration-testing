import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
  },
  title: {
    marginTop: "5px",
    fontSize: "30px",
  },
  desc: {
    marginTop: "0px",
    fontSize: "15px",
  },
});
const Post = ({ title, desc }) => {
  const style = useStyles();
  return (
    <Card data-test="buttonComponent" variant="outlined" className={style.root}>
      <CardContent>
        <h1 data-test="title" className={style.title}>
          {title.toUpperCase()}
        </h1>
        <p data-test="desc" className={style.desc}>
          {desc}
        </p>
      </CardContent>
    </Card>
  );
};
Post.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
export default Post;
