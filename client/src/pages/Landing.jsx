import { Link } from 'react-router-dom';

import LittersList from '../components/LittersList';
import PageNav from '../components/PageNav';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <PageNav />
      <h1>JW Farm AKC Labrador Puppies</h1>
      <h2>Raised in our home with love and sunshine on the farm.</h2>

      <Link to="/reserve" className="btn reserve-link">
        Reserve Your Puppy
      </Link>
    </Wrapper>
  );
};
export default Landing;