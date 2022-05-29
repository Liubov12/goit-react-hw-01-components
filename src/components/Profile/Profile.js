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
} from './Profile.styled';

const Profile = ({
  avatar,
  tag,
  username,
  location,
  stats,
  followers,
  views,
  likes,
}) => {
  return (
    <Container>
      <Description>
        <AvatarImg src={avatar} alt={tag} />
        <NameProfile>{username}</NameProfile>
        <TagName>@{tag}</TagName>
        <Location>{location}</Location>
        <Stats>
          {stats}
          <ItemStats>
            <Label>Followers</Label>
            <span className="quantity">{followers}</span>
          </ItemStats>
          <ItemStats>
            <Label>Views</Label>
            <span className="quantity">{views}</span>
          </ItemStats>
          <ItemStats>
            <Label>Likes</Label>
            <span className="quantity">{likes}</span>
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
  stats: PropTypes.object,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
export default Profile;
