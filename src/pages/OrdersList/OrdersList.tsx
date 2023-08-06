import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import React from 'react';

import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { GlobalColors } from '../../accets/styles/GlobalStyles';
import { useTypeSelector } from '../../hooks/redux';
import { RootStackParamList } from '../../navigation/Navigation';
import { setIsAuth, setLogout } from '../../store/reducers/accountReducer';

type OrdersListProps = {
  navigation: NavigationProp<RootStackParamList, 'Auth'>;
};

function OrdersList({ navigation }: OrdersListProps) {
  const dispatch = useDispatch();
  const ordersList = useTypeSelector((data) => data.ordersSlice.orders);
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
      <View style={styles.acountInfoContainer}>{/* <Text>Список заказов</Text> */}</View>
      <View style={styles.infoContainer}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 16,
            alignItems: 'center',
            width: 300,
          }}>
          {ordersList?.map((item) => {
            return (
              <View key={item.id} style={styles.orderContainer}>
                <View style={styles.orderBlock}>
                  <Text>Name: </Text>
                  <Text>{item.name}</Text>
                </View>
                <View style={styles.orderBlock}>
                  <Text>Date: </Text>
                  <Text>{item.date}</Text>
                </View>
                <View style={styles.orderBlock}>
                  <Text>Phone: </Text>
                  <Text>{item.phone}</Text>
                </View>
                <View style={styles.orderBlock}>
                  <Text>Email: </Text>
                  <Text>{item.email}</Text>
                </View>
                <View style={styles.orderBlock}>
                  <Text>Details: </Text>
                  <Text>{item.details}</Text>
                </View>
                <View style={styles.orderBlock}>
                  <Text>Time: </Text>
                  <Text>{item.time}</Text>
                </View>
                <View style={styles.orderBlock}>
                  <Text>Status: </Text>
                  <Text>{item.status}</Text>
                </View>
                <View style={styles.orderBlock}>
                  <Text>Create at: </Text>
                  <Text>{item.created_at}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
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
    backgroundColor: GlobalColors.second_color,
  },
  acountInfoContainer: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
  },
  infoContainer: {
    height: '90%',
    width: '100%',
    alignItems: 'center',
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
  orderContainer: {
    backgroundColor: GlobalColors.main_color,
    width: '100%',
    padding: 20,
    borderWidth: 2,
    borderColor: GlobalColors.fine_color,
    borderRadius: 8,
  },
  orderBlock: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: GlobalColors.second_color,
    padding: 5,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export { OrdersList };
