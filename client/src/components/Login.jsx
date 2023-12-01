import Wrapper from '../assets/wrappers/LogoutContainer';
import { useNavigate } from 'react-router-dom';
import { useHomeContext } from '../pages/HomeLayout';

const Login = () => {
  const { user } = useHomeContext();
  const navigate = useNavigate();
  const navToLogin = () => {
    navigate('/login');
  };

  return (
    <Wrapper>
      {user ? (
        ''
      ) : (
        <button type="button" className="btn login-btn" onClick={navToLogin}>
          login
        </button>
      )}
    </Wrapper>
  );
};
export default Login;
