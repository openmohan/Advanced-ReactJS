import React from 'react';
import PropTypes from 'prop-types';

const withStore =(extraProps) => (Component) => {
  return class extends React.Component{
    static displayName = `${Component.name}container`;
    static contextTypes = {
      store : PropTypes.object
    };

    render(){
      return <Component
         {...this.props}
         {...extraProps(this.context.store , this.props)}
         store={this.context.store}
         /> ;
    }
  };
};

export default withStore;
