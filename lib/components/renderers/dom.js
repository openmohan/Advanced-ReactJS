import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import StateApi from 'state-api';
// const intialData = {
//   authors:{},
//   articles:{}
// };

const store = new StateApi(window.intialData);

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
