import Wrapper from '../assets/wrappers/Gallery';
import GalleryCarousel from '../components/GalleryCarousel';
import PageNav from '../components/PageNav';
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <Wrapper>
      <PageNav />
      <div className="intro">
        <hr />
        <h3>JW Farm AKC Labrador Puppies</h3>
        <h5>Enjoy photos of our puppies past and present.</h5>
        <div className="puppies-available-container">
          <Link to="/" className="btn puppies-available-link">
            Currently available AKC puppies are displayed HERE.
          </Link>
        </div>
        <hr />
      </div>
      <GalleryCarousel />
      <div className="reserve-container">
        <Link to="/reserve" className="btn reserve-link">
          Reserve Your Puppy
        </Link>
      </div>
    </Wrapper>
  );
}

export default Gallery;
