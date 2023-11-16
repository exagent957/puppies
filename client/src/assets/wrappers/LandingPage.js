import styled from 'styled-components';

const Wrapper = styled.section`
  overflow-y: hidden;

  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  .intro {
    margin-bottom: 2.5em;
  }
  .intro h2 {
    margin-top: 1em;
    margin-bottom: 0.5em;
    text-align: center;
  }
  .intro h4 {
    margin-bottom: 0.5em;
    text-align: center;
  }
  .intro h5 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    text-align: center;
  }
  .intro p {
    margin-bottom: 0.5em;
    text-align: center;
    font-size: clamp(0.75rem, 1.5vw, 1.5rem);
    line-height: 1.5;
  }
  .reserve-container {
    width: 100%;
    height: 5em;
    margin: auto;
    margin-top: 0.5em;
    position: relative;
    padding: 1em;
    text-align: center;
    background-color: var(--red-dark);
  }
  .reserve-link {
    max-height: 90%;
    margin: 0em;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
export default Wrapper;
