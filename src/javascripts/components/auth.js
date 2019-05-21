import util from '../helpers/util';

const authStringBuilder = () => {
  const domString = 'test auth';
  util.printToDom('auth', domString);
};

export default { authStringBuilder };
