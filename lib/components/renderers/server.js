import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import DataApi  from 'state-api';
import config from 'config'
import App from 'components/App';

const serverRender = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(resp.data);
  const intialData =  {
    articles: api.getArticles(),
    authors : api.getAuthors(),
  };
  return {
    intialMarkup : ReactDOMServer.renderToString(
      <App intialData={intialData}/>
    ),
    intialData
  };
};

export default serverRender;