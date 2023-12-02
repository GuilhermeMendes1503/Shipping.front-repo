import styled from 'styled-components';


export const Toolbar = styled.div`
  background-color: #f3f2f2;
  height: 7vh;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 3px gray;
  img{
    height: 35px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  height: 100%;
  width:  ${p => p.width ? p.width : 'fit-content'};
  display: flex;
  border-style:none;
  align-items: center;
  border-left: 100px;
  border-right: 100px;
  border-color: black;
  justify-content: center;
  padding: 10px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  transition: background 1s ease, box-shadow 0.2s ease; 
  &:hover {
    background:
        /* top, transparent black, faked with gradient */ 
        linear-gradient(
          rgba(0, 0, 0, 0.01), 
          rgba(0, 0, 0, 0.08)
        );
    box-shadow: 0 4px 3px -2px orange;
    border-color: #a9a9a9;
    border: 1px;
  }
`;