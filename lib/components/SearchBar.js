import React from 'react';
import debounce from 'lodash.debounce';
import withStore from './withStore';


class SearchBar extends React.Component{
  state = {
    searchTerm : ''
  }
  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  },300)
  handleSearch = (event) => {
    this.setState({searchTerm : event.target.value},() => {
      this.doSearch();
    });
  }
  render(){
    return(
      <input type="search"
        ref={(input) => this.searchInput = input}
        placeholder="Enter search keyword"
        onChange={this.handleSearch}
        value={this.state.searchTerm}
      />
    );
  }
}

export default withStore()(SearchBar);
