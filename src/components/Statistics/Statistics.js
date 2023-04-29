import PropTypes from "prop-types";
import { Container, Title, List } from "./Statistics.styled";
import { StatisticsItem } from "components/StatisticsItem/StatisticsItem";
import { getRandomCOlor } from "js/getRandomColor";

export function Statistics({ data, title }) {
  return (
    <Container>
      <Title>{title}</Title>

      <List>
        {data.map(({ id, label, percentage }) => (
          <StatisticsItem
            key={id}
            label={label}
            percentage={percentage}
            color={getRandomCOlor()}
          />
        ))}
      </List>
    </Container>
  );
}

Statistics.propTypes = {
  id: PropTypes.number,
}