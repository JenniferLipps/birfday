import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';
import 'bootstrap';
import authString from './components/auth/auth';
import birfString from './components/birfday';
import myNavbar from './components/myNavbar/myNavbar';
import authData from './helpers/data/authData';


const init = () => {
  // console.error(apiKeys.firebaseKeys);
  firebase.initializeApp(apiKeys.firebaseKeys);
  myNavbar.navbarEvents();
  authData.checkLoginStatus();
  authString.authStringBuilder();
  birfString.birfStringBuilder();
};

init();
