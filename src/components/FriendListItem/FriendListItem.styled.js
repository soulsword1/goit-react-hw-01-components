import styled from "@emotion/styled";

export const FriendItem = styled.li`
  display: flex;

  width: 400px;
  height: 120px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  color: #6c7a89;
  background-color: #ecf0f1;
  border-radius: 10px;
  cursor: pointer;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1),
  color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:hover{
    scale: 1.1;
    color: #5D3F6A;
  }
`;

export const FriendStatus = styled.span`
  margin: auto 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.isOnline ? "#26C281" : "#F22613")};
`;

export const FriendAvatar = styled.img`
  display: block;
  margin: auto 0 auto 15px;

  height: 70px;
`;

export const FriendName = styled.p`
  margin: auto 0 auto 50px;

  font-size: 28px;
`;
