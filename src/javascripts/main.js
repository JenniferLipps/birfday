import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';
import 'bootstrap';
import authString from './components/auth/auth';
import birfString from './components/birfday';

const init = () => {
  // console.error(apiKeys.firebaseKeys);
  firebase.initializeApp(apiKeys.firebaseKeys);
  authString.authStringBuilder();
  birfString.birfStringBuilder();
};

init();
