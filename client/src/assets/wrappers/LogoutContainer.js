import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  padding: 0.5rem;
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    left: 1rem;
    width: 5rem;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: var(--border-radius);
    padding: 0.3rem;
    background: var(--primary-500);
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 6rem;
    height: 100%;
  }
  .dropdown-btn:hover {
    background: var(--primary-600);
  }
`;

export default Wrapper;
