import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native';

import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/Navigation';
import { getUser, useLoginUserMutation } from '../../store/api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { GlobalStyles, GlobalColors } from '../../accets/styles/GlobalStyles';
import { ButtonMove } from '../../components/shared/ButtonMove/ButtonMove';
import { AccountService } from '../../services';
import { setIsAuth, setUserInfo } from '../../store/reducers/accountReducer';

type AuthorizationProps = {
  navigation: NavigationProp<RootStackParamList, 'Auth'>;
};

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Authorithation({ navigation }: AuthorizationProps) {
  const [commonFormError, setCommonFormError] = useState('');
  const [focusOnEmail, setFocusOnEmail] = useState(false);
  const [focusOnPassword, setFocusOnPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'seprog8@gmail.com',
      password: 'hoHIw6Xx',
      is_customer_auth: true,
    },
  });

  const a = {
    email: 'seprog8@gmail.com',
    password: 'hoHIw6Xx',
    is_customer_auth: 'true',
  };

  const handleNavigate = () => {
    navigation.navigate('Main');
  };
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const onSubmit = async (data: { email: string; password: string; is_customer_auth: boolean }) => {
    const dataToReq: {
      email: string;
      password: string;
      is_customer_auth: boolean;
    } = {
      email: data.email,
      password: data.password,
      is_customer_auth: true,
    };
    // console.log(dataToReq);
    try {
      const res = await AccountService.login(dataToReq);
      await AsyncStorage.setItem('@token', res.data['auth-token']);
      dispatch(setIsAuth(true));
      dispatch(setUserInfo(res.data.user));
      navigation.navigate('Main');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <View style={GlobalStyles.default_container}>
      <View>
        <Text style={styles.logoText}>widget</Text>
      </View>
      <View style={styles.authFormContainer}>
        {commonFormError && <Text>Не правильный логин или пароль</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: {
              value: EMAIL_REGEX,
              message: 'email error',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onFocus={() => setFocusOnEmail(true)}
              onBlur={() => setFocusOnEmail(false)}
              style={StyleSheet.flatten([
                styles.inputContainer,
                styles.inputRegisterContainer,
                {
                  borderColor: (focusOnEmail && '#fac637') || (errors.email && 'rgb(138,0,0)') || '#333842',
                },
              ])}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <View
              style={StyleSheet.flatten([
                styles.inputPasswordContainer,
                {
                  borderColor: (focusOnPassword && '#fac637') || (errors.password && 'rgb(138,0,0)') || '#333842',
                },
              ])}>
              <TextInput
                onFocus={() => setFocusOnPassword(true)}
                onBlur={() => setFocusOnPassword(false)}
                style={styles.inputPassword}
                onChangeText={onChange}
                value={value}
                secureTextEntry={showPassword}
              />
              <Pressable hitSlop={50} onPress={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <View /> : <View />}
              </Pressable>
            </View>
          )}
          name="password"
        />
      </View>
      <Text style={styles.latter} onPress={handleNavigate}>
        Latter
      </Text>
      <ButtonMove handleMove={handleSubmit(onSubmit)}>Log in</ButtonMove>
    </View>
  );
}

const styles = StyleSheet.create({
  inputRegisterContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    width: '70%',
    height: 40,
    backgroundColor: GlobalColors.fine_color,
    borderRadius: 8,
    color: GlobalColors.main_color,
    paddingLeft: 10,
    fontSize: 16,
  },
  inputPasswordContainer: {
    backgroundColor: GlobalColors.fine_color,
    color: GlobalColors.main_color,
    height: 40,
    width: '70%',
    borderRadius: 8,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputPassword: {
    color: GlobalColors.main_color,
    width: '90%',
    height: '100%',
  },
  authFormContainer: {
    display: 'flex',
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authButton: {
    width: '70%',
    height: 36,
    borderRadius: 8,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  latter: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: GlobalColors.second_color,
    width: '70%',
    textAlign: 'center',
  },
  logoText: {
    fontSize: 36,
    fontWeight: '700',
  },
});

export { Authorithation };
