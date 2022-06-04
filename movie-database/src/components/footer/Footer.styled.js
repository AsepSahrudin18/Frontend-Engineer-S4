// import styled component
import styled from "styled-components";

const StyledFooter = styled.div`
  padding: 1rem;
  color: #fff;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  background-color: ${({ variant, theme }) =>
    theme.colors[variant] || theme.colors.primary};
`;

export default StyledFooter;
