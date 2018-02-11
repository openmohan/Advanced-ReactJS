import React from 'react';
import PropTypes from 'prop-types'
// import {data} from '../testData';

import ArticleList from './ArticleList';

// const api = new DataApi(data);

class App extends React.Component {
  static childContextTypes = {
    store : PropTypes.object
  }
  getChildContext(){
    return {
      store:this.props.store
    };
  }
  state = this.props.store.getState();
  // state = {
  //   articles : this.props.intialData.articles,
  //   authors : this.props.intialData.authors
  // };
  // async componentDidMount() {
  //   const resp = await axios.get('/data');
  //   const api = new DataApi(resp.data);
  //   this.setState(() => ({
  //     articles: api.getArticles(),
  //     authors : api.getAuthors(),
  //   }));
  // }
  // Article functions
  // articleActions = {
  //   authorLookUp : (authorId) =>  this.state.authors[authorId]
  // };

  render(){
    return(
      <ArticleList
        articles={this.state.articles}
        store={this.props.store}
      />
    );
  }
}

export default App;
