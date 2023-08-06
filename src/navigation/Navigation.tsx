import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Authorithation } from '../pages/Auth/Authorithation';
import { Main } from '../pages/Main/Main';
import { AcountInfo } from '../pages/AcountInfo/AcountInfo';
import { OrdersList } from '../pages/OrdersList/OrdersList';
import { Intro } from '../pages/Intro/Intro';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  AcountInfo: undefined;
  OrdersList: undefined;
  Intro: undefined;
};

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: true }} />
        <Stack.Screen name="Auth" component={Authorithation} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="AcountInfo" component={AcountInfo} />
        <Stack.Screen name="OrdersList" component={OrdersList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  headerStyle: {
    height: 300,
    borderBottomLeftRadius: 50,
    backgroundColor: '#1a1026',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerBackTitleStyle: {
    fontSize: 14,
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  proxyTextLogo: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  headerStyleDuble: {
    alignItems: 'center',
  },
});

export default Navigation;

export type { RootStackParamList };
