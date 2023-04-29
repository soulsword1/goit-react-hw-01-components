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

export function Profile({ user }) {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
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
  user: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
