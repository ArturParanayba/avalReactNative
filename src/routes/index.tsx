import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import SignIn from '../pages/SignIn';
import Navigation from '../pages/Navigation';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#4A1592', zIndex: 0 },
    }}
  >
    <Auth.Screen name="Navigation" component={Navigation} />
  </Auth.Navigator>
);

export default AuthRoutes;
