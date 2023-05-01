import PropTypes from "prop-types";
import { Container, Title, List, StatisticsItem, Label, Percentage } from "./Statistics.styled";
import { getRandomCOlor } from "js/getRandomColor";

export function Statistics({ data, title }) {
  return (
    <Container>

      {title && <Title>{title}</Title>}

      <List>
        {data.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} color={getRandomCOlor()}>
          <Label>{label}</Label>
          <Percentage>{percentage}</Percentage>
        </StatisticsItem>
        ))}
      </List>
    </Container>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
