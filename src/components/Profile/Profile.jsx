import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Description,
  AvatarImg,
  NameProfile,
  TagName,
  Location,
  Stats,
  ItemStats,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({ avatar, tag, username, location, stats }) => {
  return (
    <Container>
      <Description>
        <AvatarImg src={avatar} alt={tag} />
        <NameProfile>{username}</NameProfile>
        <TagName>@{tag}</TagName>
        <Location>{location}</Location>
        <Stats>
          <ItemStats>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </ItemStats>
          <ItemStats>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </ItemStats>
          <ItemStats>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </ItemStats>
        </Stats>
      </Description>
    </Container>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
