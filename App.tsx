import React from 'react';
import { StyleSheet } from 'react-native';


import WebView from 'react-native-webview';
import { Provider } from 'react-redux';
import Navigation from './src/navigation/Navigation';
import store from './src/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
