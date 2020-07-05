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

const App = () => {
  const [type, setType] = React.useState('master')
  const changeType = () => {
    if (type === 'master') return setType('visa')
    setType('master')
  }
  
  return (
    <>
      <PaymentCard type={type} />
      <Button onPress={changeType} title="change" />
      <View style={{ height: 60 }} />
    </>
  );
};


export default App;
