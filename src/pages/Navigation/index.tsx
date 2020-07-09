import React from 'react';

import { Container, Text } from './styles';

import TopDisplay from '../../components/TopDisplay';
import BottomMenu from '../../components/BottomMenu';
import CardSwiper from '../../components/Card';

const Navigation: React.FC = () => (
  <>
    <TopDisplay icon="trophy" name="trophy">
      Lorem ipsum dolor sit amet
    </TopDisplay>
    <Container>
      {/* <Text>Cards</Text> */}
      <CardSwiper />
    </Container>
    <BottomMenu />
  </>
);

export default Navigation;
