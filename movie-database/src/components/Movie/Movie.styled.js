import styled from "styled-components";

// Refactor component movie menggunakan styled
const StyledMovie = styled.div`
  margin-bottom: 1rem;

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  h3 {
    color: #4361ee;
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748b;
  }

  h4 {
    color: #ee43e5;
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
  }

  /* Medium screen */
  @media screen and (min-width: 768px) {
    flex-basis: 50%;
    padding: 1rem;
  }

  /* Large screen */
  @media screen and (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

export default StyledMovie;
