import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

const intialData = {
  authors:{},
  articles:{}
};

ReactDOM.render(
  <App intialData={intialData}/>,
  document.getElementById('root')
);
