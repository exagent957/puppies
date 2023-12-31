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
  h3 {
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
    max-width: 35em;
  }
  img {
    display: block;
    margin: auto;
    padding: 1em;
    width: 95%;
  }
  .img-frame {
    background-color: #030b33;
    margin-left: 1em;
    width: 80%;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  .intro {
    margin-bottom: 2.5em;
    text-align: center;
  }
  .intro h3 {
    margin-bottom: 0.5em;
    text-align: center;
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
