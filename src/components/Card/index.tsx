import React from 'react';
import { TouchableOpacity } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import data from './data';

import {
  Container,
  Header,
  AcceptButton,
  DeclineButton,
  Image,
  Name,
  CompanyIcon,
  Company,
  NameView,
  CompanyInfos,
  LocationIcon,
  Distance,
  LocationInfo,
  Middle,
  Footer,
  Title,
  Description,
  ButtonText,
  BottomButtonView,
  UpperView,
  BottomView,
  MiddleBar,
  Info,
  HighlightsView,
  TechView,
  ADView,
  Accept,
  Decline,
} from './styles';

const Card: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Swiper
        cards={data}
        cardsIndex={index}
        renderCard={(card: {
          avatar: string;
          name: React.ReactNode;
          company: React.ReactNode;
          distance: React.ReactNode;
          description: React.ReactNode;
        }) => (
          <Container>
            <ADView>
              {/* <TouchableOpacity> */}
              <Accept
                onPress={() => {
                  console.log('bla');
                }}
              >
                <AcceptButton
                  name="check"
                  size={22}
                  style={{ color: '#fff' }}
                />
              </Accept>
              {/* </TouchableOpacity> */}
              {/* <TouchableOpacity> */}
              <Decline
                onPress={() => {
                  console.log('ble');
                }}
              >
                <DeclineButton
                  name="close"
                  size={22}
                  style={{ color: '#fff' }}
                />
              </Decline>
              {/* </TouchableOpacity> */}
            </ADView>
            <Header>
              <Image source={{ uri: card.avatar }} />
              <NameView>
                <Name>{card.name}</Name>
              </NameView>

              <CompanyInfos>
                <CompanyIcon name="info-circle" size={10} />
                <Company>{card.company}</Company>
              </CompanyInfos>
              <LocationInfo>
                <LocationIcon name="location-pin" size={10} />
                <Distance>
                  {card.distance}
                  Km
                </Distance>
              </LocationInfo>
            </Header>
            <Middle>
              <UpperView>
                <Title>Habilidades Técnicas</Title>
                <TechView />
              </UpperView>
              <MiddleBar />
              <BottomView>
                <Title>Highlights</Title>
                <HighlightsView>
                  {/* FAZER MAP PARA PEGAR DA API */}
                  {/* <Info>POO</Info>
                  <Info>Javascript</Info>
                  <Info>C#</Info>
                  <Info>Arquitetura de sistemas</Info> */}
                </HighlightsView>
              </BottomView>
            </Middle>
            <Footer>
              <Title>Descrição</Title>
              <Description>{card.description}</Description>
            </Footer>
            <BottomButtonView>
              <TouchableOpacity>
                <ButtonText>Saiba Mais</ButtonText>
              </TouchableOpacity>
            </BottomButtonView>
          </Container>
        )}
        cardHorizontalMargin={0}
        showSecondCard="true"
        stackSize={5}
        disableTopSwipe
        disableBottomSwipe
        backgroundColor="transparent"
        infinite
      />
    </>
  );
};

export default Card;
