import React from 'react';
import PropTypes from 'prop-types';
import withStore from './withStore';

class Timestamp extends React.Component{
  componentDidMount(){
    this.context.store.startClock();
  }
  render(){
    return(
      <div>{this.props.timestamp.toString()}</div>
    );
  }
  static contextTypes = {
    store : PropTypes.object
  };
}

function extraProps(store){
  return {
    timestamp : store.getState().timestamp
  };
}



export default withStore(extraProps)(Timestamp);
