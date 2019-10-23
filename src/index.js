import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, cokmbineReducers, combineReducers } from 'redux'
import {Provider} from "react-redux"
import {reducer as addReducer } from "./reducers/addFeature"


import 'bulma/css/bulma.css';
import './styles.scss';

const rootReducer = combineReducers({
 add: addReducer
//
})

const store = createStore(rootReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
 <App />
 </Provider>
 , rootElement);
