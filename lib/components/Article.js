import React from 'react';
import PropTypes from 'prop-types';
import withStore from './withStore'

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    color : 'blue'
  },
  date: {
    fontSize: '0.85em',
    color: '#888',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  }
};

const displayDate = (date) => new Date(date).toDateString();


const Article = (props) => {
  const {article ,store} = props;
  const author = store.authorLookUp(article.authorId);
  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>
        {displayDate(article.date)}
      </div>
      <div style={styles.author}>
        <a style={styles.website} href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

Article.proptypes = {
  article : PropTypes.shape({
    date : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    body : PropTypes.string.isRequired,
    authorId : PropTypes.string.isRequired
  })
};

export default withStore(Article);
