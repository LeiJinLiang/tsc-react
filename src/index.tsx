/*
 * @Author: jinlei 
 * @Date: 2018-11-02 15:13:03 
 * @Last Modified by:   jinlei 
 * @Last Modified time: 2018-11-02 15:13:03 
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import  store  from './store'
import AsyncContainer from './containers/asyncCon'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider store={store}>
    <AsyncContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
