import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'material-ui/styles/MuiThemeProvider';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
