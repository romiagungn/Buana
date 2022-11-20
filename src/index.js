import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import rootReducer from "./redux/Reducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
