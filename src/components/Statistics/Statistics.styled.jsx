import styled from '@emotion/styled';

export const Section = styled.section`
  display: block;
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h2`
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  background: #f788a7;
  list-style: none;
`;

export const StatItem = styled.li`
  width: 33.3%;
  padding: 15px;

  &:not(:last-child) {
    border-right: 1px solid #cfcfd0;
  }
`;

export const Label = styled.span`
  display: block;
`;
