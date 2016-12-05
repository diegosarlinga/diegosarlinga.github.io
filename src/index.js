import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import routes from './routes';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// createStoreWithMiddleware(reducers)
// const store = createStore(reducers, {}, applyMiddleware(thunk));
const store = createStoreWithMiddleware(reducers);
store.subscribe(()=>{
    console.log('new State', store.getState());
});
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>
    , document.querySelector('.app-container'));
    // <Provider store={store}>
