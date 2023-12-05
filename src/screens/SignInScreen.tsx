import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ErrorInterface} from '../interface';
import {useAuthEmployee} from '../hooks/useAuthEmployee';
import {useAppSelector} from '../store/store';
import {AlertMessage} from '../components';
import {loginStyles} from '../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants/colors';

interface SignIn {
  cuil?: string;
  password?: string;
  cuit?: string;
}

const SignInScreen = () => {
  const {startLogin} = useAuthEmployee();
  const {errorMessage} = useAppSelector(state => state.auth);
  const [values, setValues] = useState<SignIn>({
    cuil: '',
    password: '',
    cuit: '',
  });
  const [alert, setAlert] = useState<ErrorInterface>({
    msg: '',
    error: undefined,
  });
  const [hidePassword, setHidePassword] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      setAlert(errorMessage);
    }
  }, [errorMessage]);

  const handleChange = (text: string, input: string) => {
    setValues({...values, [input]: text});
  };

  const handleSubmit = async () => {
    await startLogin(values as SignIn);
    // setLoading(true);
  };

  const {msg, error} = alert;

  console.log(alert);

  return (
    <SafeAreaView
      style={{...loginStyles.formScreen, backgroundColor: COLORS.primary}}>
      <View style={loginStyles.formImageContainer}>
        <Image
          style={loginStyles.formImage}
          source={require('../../assets/logo-transparente.png')}
        />
      </View>
      <View style={loginStyles.formContainer}>
        <Text style={loginStyles.title}>Enter your details to Sign In</Text>
        <View>
          <View style={loginStyles.inputContainer}>
            <View style={loginStyles.input}>
              <TextInput
                placeholder="Enter your cuil"
                onChangeText={text => handleChange(text, 'cuil')}
              />
              <Icon
                name={'person-outline'}
                style={{fontSize: 30, color: COLORS.primary}}
              />
            </View>
          </View>
          <View style={loginStyles.inputContainer}>
            <View style={loginStyles.input}>
              <TextInput
                onChangeText={text => handleChange(text, 'password')}
                placeholder="Enter your password"
              />
              <Icon
                onPress={() => setHidePassword(!hidePassword)}
                name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                style={{fontSize: 30, color: COLORS.primary}}
              />
            </View>
          </View>
          <View style={loginStyles.inputContainer}>
            <View style={loginStyles.input}>
              <TextInput
                placeholder="Enter your cuit"
                onChangeText={text => handleChange(text, 'cuit')}
              />
              <Icon
                name={'business-outline'}
                style={{fontSize: 30, color: COLORS.primary}}
              />
            </View>
          </View>
        </View>

        {errorMessage !== undefined && <AlertMessage msg={msg} error={error} />}
        <TouchableOpacity onPress={handleSubmit} style={loginStyles.button}>
          <Text style={loginStyles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export {SignInScreen};
