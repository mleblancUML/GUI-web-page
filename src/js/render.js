import React from 'react';
import ReactDOM from 'react-dom';
// if you are using Redux, then you might want to import the provider
// import { Provider } from 'react-redux'

// by default, we import the App component which is a root container which
// holds all of our other React Components
import App from './components/App/App.jsx';

// non-redux render
const appWrapper = document.getElementById('App');
appWrapper ? ReactDOM.render(<App { ...appWrapper.dataset }/>, appWrapper) : false;
