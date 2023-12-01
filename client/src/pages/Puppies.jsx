import { PuppiesContainer, PuppiesSearchContainer } from '../components';

const Puppies = () => {
  return (
    <div className="puppies-page">
      <PuppiesSearchContainer />
      <PuppiesContainer />
    </div>
  );
};

export default Puppies;
