import styled from "styled-components";
import { rem } from "polished";

const Close = styled.button`
  background-color: rgba(0, 0, 0, 0.25);
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: ${rem(24)} ${rem(24)};
  border: 0;
  font-size: ${rem(24)};
  height: ${rem(44)};
  line-height: 0;
  overflow: hidden;
  padding: 0;
  text-indent: -9999px;
  width: ${rem(44)};
`;

export default Close;
