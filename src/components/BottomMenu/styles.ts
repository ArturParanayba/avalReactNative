import styled from 'styled-components/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CenterView = styled.View`
  position: relative;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: #2b1548;
  width: 50px;
  height: 50px;
  border-radius: 35px;
  bottom: 40%;
  z-index: 4;
`;

export const InnerView = styled.View`
  position: relative;
  z-index: 4;
  width: 24.5%;
  height: 40px;
  left: 0.85%;
  /* background-color: #4a1592; */
  background-color: #4a1592;
  /* border: 1px; */
  top: 60%;
  border-bottom-right-radius: 150px;
  border-bottom-left-radius: 150px;
`;
export const CenterBox = styled.View`
  position: relative;
  z-index: 3;
  top: 45%;
  width: 23%;
  height: 40px;
  left: -0.02%;
  /* background-color: #4a1592; */
  background-color: #2b1548;
  /* background-color: transparent; */
  bottom: -35%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const CenterButtonText = styled.Text`
  color: #5affd7;
  font-family: 'Raleway-Medium';
  font-size: 18px;
`;

export const BottomMenuView = styled.View`
  position: relative;
  background-color: transparent;
  bottom: 0;
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconsLeft = styled.View`
  background-color: #2b1548;
  width: 40.79%;
  border-top-right-radius: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const IconsRight = styled.View`
  background-color: #2b1548;
  border-top-left-radius: 30px;
  width: 39.15%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  right: 0px;
`;

export const IconFontAwesome = styled(FontAwesome)`
  margin-right: 25px;
  margin-left: 20px;
`;

export const IonIcon = styled(Ionicon)`
  margin-right: 25px;
  margin-left: 20px;
`;

export const IconFeather = styled(Feather)`
  margin-right: 20px;
  margin-left: 15px;
`;
