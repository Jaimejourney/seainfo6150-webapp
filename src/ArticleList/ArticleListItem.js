import React from 'react';
import PropTypes from 'prop-types';
import classes from './ArticleListItem.module.css';

class ArticleListItem extends React.Component {
  render() {

    // paste this onClick handler into your checkbox;
    // you should not have to modify this code in any way
    // onClick={this.onClick.bind(this)}
    //
    return (
      <div className = {classes.wrapping}>
          <div className = {classes.title}><h6>{this.props.title}</h6></div>
          <div className = {classes.shortText}>{this.props.shortText}</div>
          <div className = {classes.author}><address>By:&nbsp;&nbsp;{this.props.author}</address></div>
          <div className = {classes.time}><time dateTime = {this.props.year}>{this.props.date}</time></div>
      </div>
    );
  }
 
}

ArticleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired,
  year:PropTypes.string.isRequired
};

export default ArticleListItem;
