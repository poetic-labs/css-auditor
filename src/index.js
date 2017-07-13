import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppContainer from './containers/AppContainer';
import rootReducer from './reducers/root';

const store = createStore(rootReducer);

const AppWithState = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(<AppWithState />, document.getElementById('root'));
