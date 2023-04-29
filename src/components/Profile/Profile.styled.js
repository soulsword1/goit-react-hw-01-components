import styled from "@emotion/styled";

export const Card = styled.div`
  margin: 60px;

  width: 400px;
  min-height: 400px;
  overflow-x: hidden;
  background-color: #ecf0f1;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  display: block;
  margin: 0 auto;

  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const Username = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const Tag = styled.p`
  color: #6c7a89;
`;

export const Location = styled.p`
  color: #6c7a89;
`;

export const Description = styled.div`
  padding: 20px;

  text-align: center;
  border-bottom: 1px solid #6c7a89;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 30px;

  list-style: none;
  background-color: #eeeeee;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
`;

export const Lable = styled.span`
  font-weight: 700;
`;

export const Value = styled.span`
  color: #6c7a89;
`;
