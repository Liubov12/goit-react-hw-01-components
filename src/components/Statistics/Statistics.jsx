import React from 'react';
import PropTypes from 'prop-types';

import { Section, Title, StatList, Label, StatItem } from './Statistics.styled';

const Statistics = ({ stats, title }) => {
  return (
    <Section>
      <Title>{title}</Title>

      <StatList>
        {stats.map(item => (
          <StatItem key={item.id}>
            <Label>{item.label}</Label>
            <span>{item.percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
