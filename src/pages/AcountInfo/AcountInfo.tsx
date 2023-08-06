import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { GlobalColors } from '../../accets/styles/GlobalStyles';
import { useAppDispatch, useTypeSelector } from '../../hooks/redux';
import { RootStackParamList } from '../../navigation/Navigation';
import { useGetUserQuery } from '../../store/api/auth';
import { setLogout, setIsAuth } from '../../store/reducers/accountReducer';

type AcountInfoProps = {
  navigation: NavigationProp<RootStackParamList, 'Auth'>;
};

function AcountInfo({ navigation }: AcountInfoProps) {
  const { userInfo } = useTypeSelector((data) => data.accountSlice);
  const dispatch = useDispatch()
  const handleNavigate = () => {
    navigation.navigate('Auth');
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <Pressable hitSlop={50}>
            <Text>$ 100</Text>
          </Pressable>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <Text>Main</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  async function unAuth() {
    dispatch(setLogout(''));
    dispatch(setIsAuth(false));
    await AsyncStorage.setItem('@token', '');
    navigation.navigate('Auth');
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.infoMainContainer}>
          <Text style={styles.infoMainText}>Account info</Text>
        </View>
        <View style={styles.infoBlockContainer}>
          <Text style={styles.infoBlockText}>Name: </Text>
          <Text style={styles.infoBlockTextSmall}>{userInfo.name}</Text>
        </View>
        <View style={styles.infoBlockContainer}>
          <Text style={styles.infoBlockText}>Number: </Text>
          <Text style={styles.infoBlockTextSmall}>{userInfo.phone}</Text>
        </View>
        <View style={styles.infoBlockContainer}>
          <Text style={styles.infoBlockText}>Email: </Text>
          <Text style={styles.infoBlockTextSmall}>{userInfo.email}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.authButton} onPress={unAuth}>
        <Text style={styles.authButtonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'column',
  },
  acountInfoContainer: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
  },
  infoContainer: {
    height: '70%',
    backgroundColor: GlobalColors.main_color,
    padding: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: GlobalColors.fine_color,
    width: '80%',
  },
  authButton: {
    width: 200,
    height: 36,
    borderRadius: 100,
    backgroundColor: GlobalColors.fine_color,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 100,
  },
  authButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: GlobalColors.main_color,
  },
  infoMainContainer: {
    padding: 20,
    backgroundColor: GlobalColors.second_color,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  infoMainText: {
    fontSize: 18,
  },
  infoBlockContainer: {
    padding: 10,
    backgroundColor: GlobalColors.second_color,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  infoBlockText: {
    fontSize: 16,
    fontWeight: '600',
  },
  infoBlockTextSmall: {},
});

export { AcountInfo };
