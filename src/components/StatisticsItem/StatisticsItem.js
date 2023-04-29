import PropTypes from "prop-types";
import { Item, Label, Percentage } from "./StatisticsItem.styled";

export function StatisticsItem({ label, percentage, color }) {
  return (
    <Item color={color}>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </Item>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  percentage: PropTypes.number,
}