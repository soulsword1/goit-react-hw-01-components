import PropTypes from "prop-types";
import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from "./FriendListItem.styled";

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <FriendStatus isOnline={isOnline} />
      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
