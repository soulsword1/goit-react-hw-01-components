import PropTypes from "prop-types";

import {
  Card,
  Description,
  Img,
  Username,
  Tag,
  Location,
  Stats,
  Item,
  Lable,
  Value,
} from "./Profile.styled";

export function Profile({ username, tag, location, avatar, stats: { followers, views, likes } }) {
  return (
    <Card>
      <Description>
        <Img src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Item>
          <Lable>Followers</Lable>
          <Value>{followers}</Value>
        </Item>
        <Item>
          <Lable>Views</Lable>
          <Value>{views}</Value>
        </Item>
        <Item>
          <Lable>Likes</Lable>
          <Value>{likes}</Value>
        </Item>
      </Stats>
    </Card>
  );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
};