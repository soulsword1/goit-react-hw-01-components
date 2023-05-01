import styled from "@emotion/styled";

export const Container = styled.div`
  margin-left: 60px;
  padding-top: 20px;

  width: 400px;
  max-height: 160px;
  overflow: hidden;
  text-align: center;
  background-color: #ecf0f1;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h2`
  font-size: 26px;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  flex-direction: column;
  padding: 10px 0;

  color: #f2f1ef;
  cursor: pointer;
  background-color: ${(props) => props.color};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover{
    color: #5D3F6A;
  }
`;

export const Label = styled.span`
  padding-bottom: 10px;
  font-size: 14px;
`;

export const Percentage = styled.span`
  font-size: 22px;
`;
