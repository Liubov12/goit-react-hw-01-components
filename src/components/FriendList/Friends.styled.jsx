import styled from '@emotion/styled';

export const Container = styled.ul`
  background: #e7f3fe;
`;

export const FriendItemBox = styled.li`
  display: flex;
  text-align: center;
  margin: 0% auto;
  box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  width: 200px;
  background: white;
  padding-top: 20px;
`;

export const FriendName = styled.p`
  padding-left: 15px;
`;

//  export const BgColor = friends => {
//   switch (friends.IsOnline) {
//     case true:
//       return 'green';
//     default:
//       return 'red';
//   }
// };
// background: ${BgColor};
export const OnlineIndicator = styled.span`
    width: 20px;
    background: ${props => (props.isOnline ? '#27DF16' : '#E61E3D')};
    height: 20px;
    border-radius: 100%;
    vertical-align: bottom;
    margin-left: 20px;
    margin-top: 15px;
}
`;

export const Avatar = styled.img`
  margin-left: 25px;
  padding-bottom: 10px;
  width: 48px;
`;
