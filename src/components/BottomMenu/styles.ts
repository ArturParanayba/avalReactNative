import styled from 'styled-components/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CenterView = styled.View`
  position: absolute;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: #2b1548;
  width: 50px;
  height: 50px;
  border-radius: 35px;
  bottom: 5px;
  z-index: 1;
`;

export const InnerView = styled.View`
  z-index: 1;
  width: 80px;
  height: 40px;
  background-color: #4a1592;
  bottom: 10px;
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
`;

export const CenterButtonText = styled.Text`
  color: #5affd7;
  font-family: 'Raleway-Medium';
  font-size: 18px;
`;

export const BottomMenuView = styled.View`
  position: absolute;
  background-color: #2b1548;
  bottom: 0;
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconsLeft = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;
export const IconsRight = styled.View`
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
