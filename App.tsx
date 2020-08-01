/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View, Button } from 'react-native';
import { WelcomeScreen } from './src/welcome-screen';
import { YogaLayout } from './src/yoga-layout';
import { PaymentCard } from './src/payment-card';
import { OtpView } from './src/life-cycle';
import { RootNavigator } from './src/navigation';

const App = () => {

  return (
    <>
      <RootNavigator />
    </>
  );
};


export default App;
