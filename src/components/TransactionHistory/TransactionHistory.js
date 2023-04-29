import PropTypes from "prop-types";
import {
  TransactionTable,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableBody,
  TableBodyColumn,
} from "./TransactionHistory.styled";

export function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Type</TableHeaderColumn>
          <TableHeaderColumn>Amount</TableHeaderColumn>
          <TableHeaderColumn>Currency</TableHeaderColumn>
        </TableRow>
      </TableHeader>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableBodyColumn>{type}</TableBodyColumn>
              <TableBodyColumn>{amount}</TableBodyColumn>
              <TableBodyColumn>{currency}</TableBodyColumn>
            </TableRow>
          );
        })}
      </TableBody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
