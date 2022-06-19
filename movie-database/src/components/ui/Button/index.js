// import styled component
import styled from "styled-components";
import { css } from "styled-components";

// buat components
const Button = styled.button`
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  border: none;

  /* ACCESS PROPS VARIANT */
  background-color: ${({ variant, theme }) =>
    theme.colors[variant] || theme.colors.primary};

  /* PROPS FULL */
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}
`;

// export component
export default Button;
