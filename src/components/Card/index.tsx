/* eslint-disable prettier/prettier */
import React, {useState, createRef} from 'react';
import { TouchableOpacity } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import IconAN from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome';

import data from './data';

import {
  Container,
  Header,
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
  HighlightsView,
  TechView,
  ADView,
  Accept,
  Decline,
  SwipeBackground,
  SwipeLeftView,
  SwipeRightView,
  Highlight,
  Text
} from './styles';

interface DataProps {
  avatar: string;
  name: React.ReactNode;
  company: React.ReactNode;
  distance: React.ReactNode;
  description: React.ReactNode;
}


const Card: React.FC = () => {
  const swiperRef = createRef();
  const [index, setIndex] = useState(0);
  const onSwiped = () => {
    setIndex((index + 1) % data.length);
  }


  return (
    <>
      <Swiper
        ref={swiperRef}
        cards={data}
        cardsIndex={index}
        renderCard={(card: DataProps) => (
          <Container>
            <ADView>
              <Accept
                onPress={() => {
                  swiperRef.current.swipeRight()
                }}
              >
                <IconAN
                  name="check"
                  size={22}
                  style={{ color: '#fff' }}
                />
              </Accept>
              <Decline
                onPress={() => {
                  swiperRef.current.swipeLeft()
                }}
              >
                <IconAN
                  name="close"
                  size={22}
                  style={{ color: '#fff' }}
                />
              </Decline>
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
                <TechView>
                  <Highlight style={{backgroundColor: '#8140D8', borderColor: '#8140D8'}}>
                    <IconFA name="star" size={13} color='#5AFFD7' />
                    <Text style={{color: '#5AFFD7', marginLeft: 5}}>
                      POO
                    </Text>
                  </Highlight>
                  <Highlight style={{backgroundColor: '#8140D8', borderColor: '#8140D8'}}>
                    <IconFA name="star" size={13} color='#5AFFD7' />
                    <Text style={{color: '#5AFFD7', marginLeft: 5}}>
                      Flutter
                    </Text>
                  </Highlight>
                  <Highlight style={{backgroundColor: '#8140D8', borderColor: '#8140D8'}}>
                    <IconFA name="star" size={13} color='#5AFFD7' />
                    <Text style={{color: '#5AFFD7', marginLeft: 5}}>
                      NodeJS
                    </Text>
                  </Highlight>
                  <Highlight>
                    <Text>
                      DDD
                    </Text>
                  </Highlight>
                  <Highlight style={{backgroundColor: '#fff'}}>
                    <Text style={{color: '#3a2a4f',}}>
                      Business Inteligence
                    </Text>
                  </Highlight>
                </TechView>
              </UpperView>


              <MiddleBar />


              <BottomView>
                <Title>Highlights</Title>
                <HighlightsView>
                  <Highlight style={{backgroundColor: '#8140D8', borderColor: '#8140D8'}}>
                    <IconFA name="star" size={13} style={{color: '#5AFFD7'}} />
                    <Text style={{color: '#5AFFD7', marginLeft: 5}}>
                      C#
                    </Text>
                  </Highlight>
                  <Highlight style={{backgroundColor: '#8140D8', borderColor: '#8140D8'}}>
                    <IconFA name="star" size={13} style={{color: '#5AFFD7'}} />
                    <Text style={{color: '#5AFFD7', marginLeft: 5}}>
                      Arquitetura de sistemas
                    </Text>
                  </Highlight>
                  <Highlight>
                    <Text>
                      UML
                    </Text>
                  </Highlight>
                  <Highlight style={{backgroundColor: '#fff'}}>
                    <Text style={{color: '#3a2a4f',}}>
                      Data Science
                    </Text>
                  </Highlight>
                </HighlightsView>
              </BottomView>
            </Middle>
            <Footer>
              <Title>Descrição</Title>
              <Description numberOfLines={3}>{card.description}</Description>
            </Footer>
            <BottomButtonView>
              <TouchableOpacity>
                <ButtonText>Saiba Mais</ButtonText>
              </TouchableOpacity>
            </BottomButtonView>
          </Container>
        )}
        onSwiper={onSwiped}
        cardHorizontalMargin={0}
        showSecondCard="true"
        stackSize={5}
        disableTopSwipe
        disableBottomSwipe
        backgroundColor="transparent"
        animateOverlayLabelsOpacity
        animateCardOpacity
        overlayLabels={{
          left: {
            element:
  <>
    <SwipeBackground />
    <SwipeLeftView>
      <IconAN
        name="close"
        size={70}
        style={{ color: '#fff' }}
      />
    </SwipeLeftView>
  </>
          },
          right: {
            element:
  <>
    <SwipeBackground />
    <SwipeRightView>
      <IconAN
        name="check"
        size={70}
        style={{ color: '#fff' }}
      />
    </SwipeRightView>
  </>,
          },
        }}
        infinite
      />
    </>
  );
};

export default Card;
