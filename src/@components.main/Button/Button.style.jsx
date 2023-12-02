import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => (p.color ? p.color : 'transparent')};
  border: none;
  /* height: 30px; */
  /* width: 30px; */
  /* min-height: 25px; */
  height: ${(p) => (p.h ? p.h : '100%')};
  width: ${(p) => (p.w ? p.w : '20%')};
  margin-top: 5px;
  cursor: pointer;
`;


export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  /* padding: 5px; */
`;

export const P = styled.p`
  margin: 0px;
`