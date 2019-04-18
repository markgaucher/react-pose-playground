import styled from "styled-components";
import { rem } from "polished";

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.25);
  border: 0;
  border-radius: ${rem(2)};
  font-size: ${rem(12)};
  font-weight: 500;
  letter-spacing: 1px;
  padding: ${rem(12)} ${rem(24)};
  text-transform: uppercase;

  & + & {
    margin-left: ${rem(8)};
  }
`;

export default Button;
