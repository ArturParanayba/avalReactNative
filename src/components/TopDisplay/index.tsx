import React from 'react';
import { TextProps } from 'react-native';

import { Container, Text, Icon } from './styles';

interface InputProps extends TextProps {
  name: string;
  icon: string;
}

const TopDisplay: React.FC<InputProps> = ({
  name,
  icon,
  children,
  ...rest
}) => (
  <Container>
    <Icon name={icon} size={20} />
    <Text {...rest}>{children}</Text>
  </Container>
);

export default TopDisplay;
