import React from 'react';
import PropTypes from 'prop-types';

const withStore = (Component) => {
  return class extends React.Component{
    static displayName = `${Component.name}container`;
    static contextTypes = {
      store : PropTypes.object
    };

    render(){
      return <Component {...this.props} store={this.context.store} /> ;
    }
  };
};

export default withStore;
