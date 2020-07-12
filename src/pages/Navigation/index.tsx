import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, SearchButtonView, AddButtonView } from './styles';

import TopDisplay from '../../components/TopDisplay';
import BottomMenu from '../../components/BottomMenu';
import CardSwiper from '../../components/Card';

const Navigation: React.FC = () => (
  <>
    <TopDisplay icon="trophy" name="trophy">
      Lorem ipsum dolor sit amet
    </TopDisplay>
    <Container>
      <CardSwiper />
    </Container>
    <AddButtonView>
      <Icon name="add" size={30} color="8140D8" />
    </AddButtonView>
    <SearchButtonView>
      <Icon name="search" size={25} color="8140D8" />
    </SearchButtonView>

    <BottomMenu />
  </>
);

export default Navigation;
