import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Alert,
} from 'react-native';

import {
  Container,
  CenterView,
  InnerView,
  CenterButtonText,
  BottomMenuView,
  IconsLeft,
  IconsRight,
  IconFontAwesome,
  IonIcon,
  IconFeather,
  CenterBox,
} from './styles';

const BottomMenu: React.FC = () => {
  return (
    <Container>
      <InnerView>
        <CenterView>
          <TouchableWithoutFeedback>
            <CenterButtonText>36</CenterButtonText>
          </TouchableWithoutFeedback>
        </CenterView>
      </InnerView>

      <CenterBox />
      <BottomMenuView>
        <IconsLeft>
          <TouchableOpacity
            onPress={() => {
              console.log('bell');
            }}
          >
            <IconFontAwesome name="bell" size={25} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log('chat');
            }}
          >
            <IonIcon name="chatbubbles" size={25} color="#FFF" />
          </TouchableOpacity>
        </IconsLeft>

        <IconsRight>
          <TouchableOpacity
            onPress={() => {
              console.log('planet');
            }}
          >
            <IonIcon name="planet-sharp" size={25} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log('bell');
            }}
          >
            <IconFeather name="more-horizontal" size={30} color="#FFF" />
          </TouchableOpacity>
        </IconsRight>
      </BottomMenuView>
    </Container>
  );
};

export default BottomMenu;
