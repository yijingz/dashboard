import { createStore, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import * as firebase from 'firebase';

import reducers from './reducers/';

const config = {
	userProfile: 'users'
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, config),
)(createStore)


const store = createStoreWithFirebase(reducers, {})


export default store;