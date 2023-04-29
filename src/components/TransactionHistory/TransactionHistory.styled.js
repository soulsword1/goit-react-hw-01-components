import styled from "@emotion/styled";

export const TransactionTable = styled.table`
margin: 60px 0 60px 60px;

width: 400px;
color:#6c7a89;
border-radius: 1em;
border-collapse: collapse;
overflow: hidden;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;


& TableRow:last-child TableBodyColumn:first-of-type". {
  border-bottom-left-radius: 10px;
}
    
& TableRow:last-child TableBodyColumn:last-child {
  border-bottom-right-radius: 10px;
}
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
