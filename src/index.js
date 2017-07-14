import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppContainer from './containers/AppContainer';
import rootReducer from './reducers/root';

const store = createStore(rootReducer, applyMiddleware(thunk));

const AppWithStore = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(<AppWithStore />, document.getElementById('root'));
