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
          <div className = {classes.title}>{this.props.title}</div>
          <div className = {classes.shortText}>{this.props.shortText}</div>
          <br />
          <div className = {classes.author}>By:&nbsp;&nbsp;{this.props.author}</div>
          <div className = {classes.time}>{this.props.date}</div>
          {this.props.year}
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
