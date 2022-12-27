import { createStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import * as api from '../config';
import { rootRedusers } from './rootRedusers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootRedusers,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ client: axios, api }))
  )
);
