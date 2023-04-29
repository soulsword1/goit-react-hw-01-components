import styled from "@emotion/styled";

export const TransactionTable = styled.table`
margin: 60px 0 60px 60px;


`;

export const TableHeader = styled.thead`
  font-size: 22px;
  background-color: #ecf0f1;
`;

export const TableHeaderColumn = styled.th`
  padding: 15px;

  &:not(:last-child) {
    border-right: 1px solid #bdc3c7;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #eeeeee;
  }
`;

export const TableBody = styled.tbody``;

export const TableBodyColumn = styled.td`
  padding: 15px;

  font-size: 20px;
  text-align: center;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    border-right: 1px solid #bdc3c7;
  }

  &:hover {
    color: #5d3f6a;
  }
`;
