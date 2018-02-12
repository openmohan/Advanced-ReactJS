import React from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';
// import {data} from '../testData';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';

// const api = new DataApi(data);

class App extends React.Component {
  onStoreChange = () => {
    this.setState(this.props.store.getState());
  }
  componentDidMount = () => {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
  }
  componentWillUnmount = () => {
    this.props.store.unsubscribe(this.subscriptionId);
  }
  static childContextTypes = {
    store : PropTypes.object
  }
  getChildContext(){
    return {
      store:this.props.store
    };
  }
  // setSearchTerm = (searchTerm) => {
  //   this.setState({searchTerm});
  // }
  state = this.props.store.getState();
  //Update when store changes


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
    let {articles , searchTerm } = this.state;
    if(searchTerm){
      articles = pickBy(articles , (value) => {
        return value.title.match(new RegExp(searchTerm, 'i')) || value.body.match(new RegExp(searchTerm, 'i'));
      });
    }
    return(
      <div>
        <SearchBar  doSearch={this.props.store.setSearchTerm}/>
        <ArticleList
          articles={articles}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default App;
