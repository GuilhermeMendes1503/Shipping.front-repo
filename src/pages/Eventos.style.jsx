import styled from "styled-components";

export const Event = styled.div`
  margin: 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.p`
  font-weight: bolder;
  font-size: 2vh;
  margin: 0px;
`;

export const Controls = styled.div`
margin-top: -15px;
`;

export const VStack = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items:center;
  padding-bottom: 2px;
  label{
    font-size: x-small;
    margin-bottom: -10px !important;
    margin-top: -10px;
    padding: 0px;
  }
`;

export const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #ffa200;
  font-size: 1.2vh;
  border-radius: 5px;
  padding: 2px;
  color: white;
  width: 95%;
  justify-content: center;

`;

export const EventProps = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:4px;
  strong{
    font-weight: bolder;
  }
  p{
    /* overflow: hidden;
    white-space: nowrap; */
    margin: 0px;
  }
`;