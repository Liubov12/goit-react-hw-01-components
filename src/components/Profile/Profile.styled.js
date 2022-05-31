import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 30px;
  width: 600px;
  margin: 0 auto;
  display: block;
`;

export const Description = styled.div`
  display: block;
  width: 300px;
  height: auto;
  background: white;
  margin: 0 auto;
  padding-top: 40px;
  text-align: center;
  box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.25);
`;

export const AvatarImg = styled.img`
  display: block;
  width: 128px;
  height: 128px;
  border-radius: 100%;
  margin: auto;
  border: 3px solid rgb(245, 250, 255);
`;

export const NameProfile = styled.p`
  font-size: 18px;
  color: #333333;
  font-weight: 700;
  margin-top: 30px;
`;

export const TagName = styled.p`
  font-size: 14px;
  color: #666666;

  margin-top: 10px;
`;

export const Location = styled.p`
  font-size: 15px;
  font-family: sans-serif;
  font-weight: bold;
  color: #c3c5c6;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  text-align: center;
  background-color: #f3f6f9;
`;

export const ItemStats = styled.li`
  width: 33.3%;
  padding: 15px;

  &:not(:last-child) {
    border-right: 1px solid #cfcfd0;
    justify-content: space-evenly;
  }
`;

export const Label = styled.span`
  margin-bottom: 20px;
  display: block;
`;

export const Quantity = styled.span`
  margin-top: 15px;
  display: block;
  font-weight: 700;
`;
