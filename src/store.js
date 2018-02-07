import { createStore, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import * as firebase from 'firebase';

import reducers from './reducers/';

var fbconfig = {
    apiKey: "AIzaSyBPweAHcP4em0PYh8XWzEqjNhTk3OBNS5I",
    authDomain: "dashboard-dev-8b843.firebaseapp.com",
    databaseURL: "https://dashboard-dev-8b843.firebaseio.com",
    projectId: "dashboard-dev-8b843",
    storageBucket: "dashboard-dev-8b843.appspot.com",
    messagingSenderId: "264557605189"
  };
firebase.initializeApp(fbconfig);

const config = {
	userProfile: 'users'
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, config),
)(createStore)


const store = createStoreWithFirebase(reducers, {})


export default store;