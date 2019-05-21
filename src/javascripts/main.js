import '../styles/main.scss';
import 'bootstrap';
import authString from './components/auth';
import birfString from './components/birfday';

const init = () => {
  authString.authStringBuilder();
  birfString.birfStringBuilder();
};

init();
