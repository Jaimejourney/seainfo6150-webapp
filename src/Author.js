import React from "react";
import PropTypes from "prop-types";

const Author=({author})=>(
    <div>
    <address>{author}</address>
    </div>
);

Author.propTypes={
    author:PropTypes.string.isRequired
};

export default Author;




