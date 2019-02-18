import React from "react";
import PropTypes from "prop-types";
import classes from "./ArticleImage.module.css";

const ArticleImage = ({ url, title }) => (
  <div className={classes.container}>
    <img id={title} className={classes.image} src={url} alt="alt test" />
  </div>
);

ArticleImage.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ArticleImage;