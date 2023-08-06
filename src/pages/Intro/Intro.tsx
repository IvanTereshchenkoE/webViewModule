import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import react, { useEffect } from 'react';

import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { RootStackParamList } from '../../navigation/Navigation';
import { AccountService } from '../../services';
import { getUser, useGetUserQuery } from '../../store/api/auth';
import { setIsAuth, setUserInfo } from '../../store/reducers/accountReducer';

interface IIntro {
  navigation: NavigationProp<RootStackParamList, 'Main'>;
}

const Intro = ({ navigation }: IIntro) => {
  const dispatch = useDispatch();
  useEffect(() => {
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
    checkToken();
  }, []);
  return (
    <View>
      <Text>sas</Text>
    </View>
  );
};

export { Intro };
