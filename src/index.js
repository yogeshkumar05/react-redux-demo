import React from 'react';
import createSagaMiddleware from 'redux-saga';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './App';
import rootSaga from './saga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>,
document.getElementById('container'),
);