import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendName,
  Avatar,
  OnlineIndicator,
  FriendItemBox,
} from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendItemBox>
    <OnlineIndicator isOnline={isOnline}></OnlineIndicator>
    <Avatar src={avatar} alt={name} />
    <FriendName>{name}</FriendName>
  </FriendItemBox>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
