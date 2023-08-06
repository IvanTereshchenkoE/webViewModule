import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';

import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { LocalSvg } from 'react-native-svg';
import WebView from 'react-native-webview';
import AccountIcon from '../../accets/images/svg/navbarIcons/AccountIcon';
import BasketIcon from '../../accets/images/svg/navbarIcons/BasketIcon';
import BurgerIcon from '../../accets/images/svg/navbarIcons/BurgerIcon';
import OrdersIcon from '../../accets/images/svg/navbarIcons/OrdersIcon';
import { GlobalColors, GlobalStyles } from '../../accets/styles/GlobalStyles';
import { useAppDispatch, useTypeSelector } from '../../hooks/redux';
import { RootStackParamList } from '../../navigation/Navigation';
import { AccountService, OrdersService } from '../../services';
import { useGetUserQuery } from '../../store/api/auth';
import { setUserInfo, setIsAuth } from '../../store/reducers/accountReducer';
import { setOrdersList } from '../../store/reducers/ordersReducer';

type MainProps = {
  navigation: NavigationProp<RootStackParamList, 'Auth'>;
};

const INJECTED_JAVASCRIPT = `(function() {
  function sendTokenToWebView(token) {
    window.ReactNativeWebView.postMessage(token);
  }

  function observeLocalStorageChanges() {
    const tokenKey = 'widgetAuthTokenCustomer';

    let currentToken = window.localStorage.getItem(tokenKey);

    const storageChangeHandler = (event) => {
      if (event.key === tokenKey && event.newValue !== currentToken) {
        currentToken = event.newValue;
        sendTokenToWebView(currentToken);
        window.ReactNativeWebView.postMessage(currentToken);
      }
    };

    window.addEventListener('storage', storageChangeHandler);
  }

  observeLocalStorageChanges();

  const tokenLocalStorage = window.localStorage.getItem('widgetAuthTokenCustomer');
  sendTokenToWebView(tokenLocalStorage);
})();`;

function Main({ navigation }: MainProps) {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const isAuth = useTypeSelector((data) => data.accountSlice.isAuth);

  const dispatch = useAppDispatch();

  async function checkToken() {
    try {
      const res = await AccountService.getAuthInfo();
      dispatch(setUserInfo(res.data));
      dispatch(setIsAuth(true));
      navigation.navigate('Main');
    } catch {
      navigation.navigate('Main');
    }
  }

  useEffect(() => {
    async function getOrdersList() {
      const data = await OrdersService.getOrders();
      dispatch(setOrdersList(data.data));
      console.log('orders rea', data.data);
    }
    if (isAuth) {
      getOrdersList();
    }
  }, [isAuth]);
  const onMessage = useCallback(async (event: any) => {
    console.log(event.nativeEvent);
  }, []);
  const handleNavigate = (item: keyof RootStackParamList) => {
    if (isAuth) {
      navigation.navigate(item);
    } else {
      navigation.navigate('Auth');
    }
  };
  // console.log('token', token);
  return (
    <SafeAreaView style={GlobalStyles.default_container}>
      <View style={styles.webViewContainer}>
        <WebView
          source={{
            uri: 'https://www.keurslagerdeburggrave.be/',
          }}
          onLoad={() => {}}
          injectedJavaScript={INJECTED_JAVASCRIPT}
          onMessage={onMessage}
          messagingEnabled={true}
          dev={true}
          onLoadEnd={() => setLoading(false)}
        />
      </View>
      <View style={styles.bottomNavigationContainer}>
        <TouchableOpacity style={styles.bottomNavigationButtonContainer} onPress={() => handleNavigate('AcountInfo')}>
          <AccountIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavigationButtonContainer}>
          <BasketIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavigationButtonContainer} onPress={() => handleNavigate('OrdersList')}>
          <OrdersIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavigationButtonContainer}>
          <BurgerIcon />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  webViewContainer: {
    width: '100%',
    height: '90%',
  },
  bottomNavigationContainer: {
    width: '100%',
    height: '10%',
    backgroundColor: GlobalColors.second_color,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  bottomNavigationButtonContainer: {
    width: 45,
    height: 45,
    // backgroundColor: GlobalColors.fine_color,
    // borderColor: GlobalColors.second_color,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  bottomNavigationButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: GlobalColors.main_color,
  },
  iconSvg: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
  },
});

export { Main };
