import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 6;
`;

export const AddButtonView = styled.TouchableOpacity`
  width: 13%;
  height: 7%;
  border-radius: 300px;
  background-color: #fff;
  position: absolute;
  border: 1px;
  bottom: 9%;
  left: 4%;
  justify-content: center;
  align-items: center;

  z-index: 7;
`;

export const SearchButtonView = styled.TouchableOpacity`
  width: 13%;
  height: 7%;
  border-radius: 300px;
  background-color: #5affd7;
  position: absolute;
  bottom: 9%;
  right: 4%;
  justify-content: center;
  align-items: center;
  z-index: 7;
`;
