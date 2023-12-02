import styled, { css } from "styled-components";

export const Days = styled.div`
  display: flex;
  width: 14vw;
  height: 100%;
  padding: 3px;
  transform: scale(0.95);
  transition: all ease-out 0.1s;
  margin: 10px 0px;
  cursor: pointer;
  gap: 3px;
  /* align-items: center; */
  /* margin: 1px; */
  font-size:7vw;
  border:solid;
  border-radius: 0px;
  border-width: 1px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  /* ${(props) =>
    props.state === "selected" &&
    css`
      background-color: #e8e8e8;
      color: red;
      font-size:7vw
    `} */

  ${(props) =>
    props.state === "nonPertenceMonth" &&
    css`
      opacity: 0.3;
      font-size:3vw
    `}

    ${(props) =>
    props.state === "today" &&
    css`
      color: orange;
      font-size:8vw
    `}
`;
