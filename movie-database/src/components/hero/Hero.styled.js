// import styled component
import styled from "styled-components";

const StyledHero = styled.div`
  margin: 1rem;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .heroleft {
    margin-bottom: 1rem;
  }

  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  img {
    margin-top: 2rem;
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  /* Medium screen */
  @media screen and(min-width: 768px) {
    /*
   * Nothing TODO Here.
   * We dont change style Hero. 
   */
  }

  /* Large Screen */
  @media screen and (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

    section {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .heroleft {
      flex-basis: 50%;
      text-align: left;
    }

    .heroright {
      flex-basis: 50%;
    }

    img {
      margin-top: 2rem;
      max-width: 100%;
      height: auto;
    }
  }
`;

export default StyledHero;
