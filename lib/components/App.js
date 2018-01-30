import React from 'react';
import DataApi from 'state-api';
import axios from 'axios';
// import {data} from '../testData';

import ArticleList from './ArticleList';

// const api = new DataApi(data);

class App extends React.Component {
  state = {
    articles : this.props.intialData.articles,
    authors : this.props.intialData.authors
  };
  async componentDidMount() {
    const resp = await axios.get('/data');
    const api = new DataApi(resp.data);
    this.setState(() => ({
      articles: api.getArticles(),
      authors : api.getAuthors(),
    }));
  }
  //Article functions
  articleActions = {
    authorLookUp : (authorId) =>  this.state.authors[authorId]
  };

  render(){
    return(
      <ArticleList
        articles={this.state.articles}
        actions={this.articleActions}
      />
    );
  }
}

export default App;
