import styled from 'styled-components/native';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import IconEX from 'react-native-vector-icons/Entypo';
import IconAN from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  flex: 0.91;
  border-radius: 24px;
  background-color: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: 7%;
  top: 4%;
  flex-direction: column;
`;

export const Image = styled.Image`
  width: 43.72px;
  height: 42.89px;
  left: 6%;
  border-radius: 35px;
  border: 2px #5affd7;
`;

export const Company = styled.Text`
  left: 15px;
  bottom: 2px;
  font-size: 12px;
  color: #3a2a4f;
  font-family: 'Raleway-Medium';
  flex-direction: row;
`;

export const CompanyIcon = styled(IconFA)`
  color: #8140d8;
  margin-right: 10px;
  bottom: 5px;
  position: absolute;
`;

export const LocationIcon = styled(IconEX)`
  color: #8140d8;
  right: 80px;
  bottom: 3px;
  position: absolute;
`;

export const Distance = styled.Text`
  margin-left: 20px;
  font-size: 13px;
  bottom: 3px;
  font-family: 'Raleway-Light';
`;

export const CompanyName = styled.Text`
  font-size: 14px;
  font-family: 'Raleway-Light';
`;

export const NameView = styled.View`
  width: 250px;
  margin-left: 22.5%;
  bottom: 37px;
  flex-direction: row;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #3a2a4f;
  font-family: 'Raleway-Medium';
`;

export const CompanyInfos = styled.View`
  width: 100px;
  height: 15px;
  top: -30px;
  margin-left: 22.5%;
  flex-direction: row;
`;

export const LocationInfo = styled.View`
  width: 100px;
  height: 15px;
  top: -45px;
  left: 170px;
  flex-direction: row;
`;

export const Middle = styled.View`
  width: 100%;
  height: 55%;
  top: 7.5%;
  left: 0;
  flex-direction: column;
  border: 1px rgba(0, 0, 0, 0.03);
  background-color: rgba(129, 64, 216, 0.03);
`;

export const HighlightsView = styled.View`
  width: 95%;
  height: 80%;
  margin-left: 2.5%;
  flex-direction: row;
`;

export const Info = styled.Text`
  font-family: 'Raleway-Medium';
  height: 15%;
  line-height: 16px;
  font-size: 14px;
  margin-top: 2%;
  margin-left: 3%;
  border: 2px #000;
  align-items: center;
`;

export const UpperView = styled.View`
  width: 100%;
  height: 49%;
`;

export const TechView = styled.View`
  width: 95%;
  height: 80%;
  margin-left: 2.5%;
`;

export const BottomView = styled.View`
  width: 100%;
  height: 50%;
  top: 1%;
`;

export const MiddleBar = styled.View`
  width: 90%;
  left: 5%;
  height: 1%;
  top: 0.5%;
  border: 2px rgba(0, 0, 0, 0.03);
  border-radius: 24px;
`;

export const Footer = styled.View`
  width: 100%;
  height: 27.5%;
  top: 10%;
  left: 0;
  flex-direction: column;
  background-color: transparent;
`;

export const Title = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 14px;
  left: 6%;
  margin-top: 2%;
  z-index: 10;
`;

export const Description = styled.Text`
  font-family: 'Raleway-Light';
  font-size: 14px;
  margin-left: 6%;
  margin-right: 6%;
  margin-top: 2%;
`;

export const BottomButtonView = styled.View`
  width: 100px;
  height: 30px;
  bottom: 0;
  flex-direction: column;
  background-color: transparent;
  align-self: center;
`;

export const ADView = styled.View`
  width: 20%;
  height: 30%;
  right: 0;
  top: 1%;
  flex-direction: column;
  background-color: transparent;
  align-items: center;
  align-self: center;
  z-index: 1;
  position: absolute;
`;

export const ButtonText = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 14px;
  margin-left: 20px;
  margin-top: 10px;
  text-decoration-color: #8140d8;
  color: #8140d8;
`;

export const Accept = styled.TouchableOpacity`
  top: 3%;
  width: 55%;
  height: 25%;
  border-radius: 150px;
  background: #1fb893;
  position: absolute;
  align-items: center;
  z-index: 2;
`;

export const AcceptButton = styled(IconAN)`
  top: 25%;
  position: absolute;
  z-index: 3;
`;
export const Decline = styled.TouchableOpacity`
  top: 35%;
  width: 55%;
  height: 25%;
  border-radius: 150px;
  background: #f23870;
  position: absolute;
  z-index: 2;
  align-items: center;
`;

export const DeclineButton = styled(IconAN)`
  top: 23%;
  position: absolute;
  z-index: 3;
`;
