import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Friends.styled';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    // <ul className={s.friends}>
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
