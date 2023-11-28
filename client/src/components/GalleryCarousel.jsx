import ImageGallery from 'react-image-gallery';
import Wrapper from '../assets/wrappers/Carousel';

const GalleryCarousel = () => {
  //ImageGallery expects an array of objects as a prop (original, thumbnail, fullscreen)
  const pics = [
    { original: '/img/users/user-654ebf3d12dc9cb959cb1b11-1700231277403.jpg' },
    { original: '/img/users/user-654ebf3d12dc9cb959cb1b11-1700231199993.jpg' },
    { original: '/img/users/user-654ebf3d12dc9cb959cb1b11-1700231212719.jpg' },
    { original: '/img/users/user-654ebf3d12dc9cb959cb1b11-1700231225050.jpg' },
    { original: '/img/users/user-654ebf3d12dc9cb959cb1b11-1700231237545.jpg' },
    { original: '/img/users/user-654ebf3d12dc9cb959cb1b11-1700231246882.jpg' },
    { original: '/img/users/user-654ebf3d12dc9cb959cb1b11-1700231267709.jpg' },
    { original: '/img/users/user-654ebf3d12dc9cb959cb1b11-1700231298340.jpg' },
    { original: '/img/users/user-654ebf3d12dc9cb959cb1b11-1700231318943.jpg' }
  ];

  return (
    <Wrapper>
      <ImageGallery style={{ height: '90px' }} items={pics} showThumbnails={false} />
    </Wrapper>
  );
};
export default GalleryCarousel;
