import styled from 'styled-components';

const Wrapper = styled.div`
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--text-secondary-color);
    padding-top: 1rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
    padding-left: 2.5rem;
    text-transform: capitalize;
    transition: padding-left 0.3s ease-in-out;
  }
  .nav-link:hover {
    padding-left: 3rem;
    color: var(--primary-500);
    transition: var(--transition);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--primary-500);
  }
`;
export default Wrapper;
