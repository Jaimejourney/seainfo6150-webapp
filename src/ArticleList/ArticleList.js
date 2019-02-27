import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import classes from "./ArticleList.module.css";

const ArticleList = ({articles}) => (
    <div className={classes.container}>
        <div className={classes.heading}>
            <div className={classes.headText}>
                The INFO6150 News
            </div>
            <div className={classes.headSubText}>
                Wed,February 20,2019
            </div>
        </div>
        <ul className={classes.wrapping}>
            {// this iterates through the articles JSON and calls your ArticleListItem
            // component for each article
            Object
                .values(articles)
                .map(article => {
                    return <ArticleListItem
                        key={article.slug}
                        title={article.title}
                        date={article.pubDate}
                        year={article.pubYear}
                        author={article.author}
                        shortText={article.shortText}
                        url={article.image._url}/>
                })}
        </ul>
        <div className={classes.footer}>
            <div className = {classes.footText}> &copy; 2019, &nbsp; April Bingham</div>
        </div>
    </div>
);

ArticleList.propTypes = {
    articles: PropTypes.object.isRequired
}

export default ArticleList;
