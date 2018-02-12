import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component{
  state = {
    searchTerm : ''
  }
  doSearch = debounce(() => {
    console.log(this.state.searchTerm);
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

export default SearchBar;
