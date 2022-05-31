import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './FriendList.styled';
import FriendListItem from './FriensListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(({ avatar, id, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
