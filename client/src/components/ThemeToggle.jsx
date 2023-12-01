import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Wrapper from '../assets/wrappers/ThemeToggle';
import { useHomeContext } from '../pages/HomeLayout';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useHomeContext();
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? <BsFillSunFill className="toggle-icon" /> : <BsFillMoonFill />}
    </Wrapper>
  );
};
export default ThemeToggle;
