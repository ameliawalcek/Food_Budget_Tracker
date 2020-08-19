import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import NAMEStore from '../src/stores/NAMEStore'
//let myNAMEStore = new NAMESTore()

ReactDOM.render(
  <App
    // store={myNAMEStore}
  />, document.getElementById('root')
);

serviceWorker.unregister();
