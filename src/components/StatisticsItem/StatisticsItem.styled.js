import styled from "@emotion/styled";

export const Item = styled.li`
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
