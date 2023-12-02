import styled from "styled-components";


export const ButtonStyle = styled.button`
  cursor: pointer;
  background-color: ${p => p.bgcolor ? p.bgcolor : '#ffd285d5'};
  height: 100%;
  width:  ${p => p.width ? p.width : 'fit-content'};
  color:  ${p => p.fontcolor ? p.fontcolor : 'white'};
  display: flex;
  border-style:none;
  align-items: center;
  border-width:1px;
  border-color: black;
  justify-content: center;
  padding: 0px 20px 0px 20px;
  font-size: x-small;


  /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
  font-weight: bolder;
  border-radius: 10px;
  transition: background 1s ease, box-shadow 0.2s ease; 

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