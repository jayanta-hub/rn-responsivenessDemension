import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import * as yup from 'yup';
import styles from './styles';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../../Infrastructure/utils/screenUtility';
import Loader from '../../../Infrastructure/component/Loader/Loader';
import {useFormik} from 'formik';
import Logo from '../../../Infrastructure/component/Logo/Logo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../Infrastructure/assets/colors/colors';
import CustomButton from '../../../Infrastructure/component/CustomButton/CustomButton';
import {AuthContext} from '../../../Infrastructure/utils/context';
import Toast from 'react-native-simple-toast';
const loginValidationSchema = yup.object().shape({
  userID: yup.string().required('User Name / ID Required'),
  password: yup.string().required('Password Required'),
});
const LoginComponent = () => {
  const navigation = useNavigation();
  const [status, setStatus] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const {signIn} = React.useContext(AuthContext);
  const formSubmitHandler = async formData => {
    setStatus(true);
    setTimeout(async () => {
      Toast.show('Login Success', Toast.SHORT);
      setStatus(false);
      await signIn();
    }, 1000);
  };
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    touched,
    errors,
    handleReset,
  } = useFormik({
    initialValues: {userID: '', password: ''},
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: () => formSubmitHandler(values),
    validationSchema: loginValidationSchema,
  });
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <Loader status={status} />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={{flex: 1}}>
              <TouchableOpacity style={{...styles.logo}}>
                <Logo />
              </TouchableOpacity>
              <View style={styles.form}>
                <View style={styles.content}>
                  <View>
                    <Text style={styles.labelText}>User Name / ID</Text>
                    <TextInput
                      name="userID"
                      placeholder="Enter"
                      placeholderTextColor={colors.GunPowder}
                      value={values.userID}
                      onBlur={handleBlur('userID')}
                      onChangeText={handleChange('userID')}
                      style={styles.TextInputs}
                    />
                    {touched.userID && errors.userID && (
                      <Text style={styles.errorMessage}>{errors.userID}</Text>
                    )}
                  </View>
                  <View
                    style={{
                      marginTop: responsiveScreenHeight(1),
                    }}>
                    <Text style={styles.labelText}>Password</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <TextInput
                        name="password"
                        placeholder="Enter"
                        placeholderTextColor={colors.GunPowder}
                        value={values.password}
                        onBlur={handleBlur('password')}
                        onChangeText={handleChange('password')}
                        secureTextEntry={passwordVisible}
                        autoCorrect={false}
                        style={{...styles.TextInputs, flex: 1}}
                      />
                      <FontAwesome5
                        name={passwordVisible ? 'eye' : 'eye-slash'}
                        onPress={() => setPasswordVisible(!passwordVisible)}
                        size={responsiveScreenWidth(5)}
                        color="grey"
                        style={{
                          position: 'absolute',
                          right: responsiveScreenWidth(2),
                          top: responsiveScreenHeight(2.5),
                        }}
                      />
                    </View>
                    {touched.password && errors.password && (
                      <Text style={styles.errorMessage}>{errors.password}</Text>
                    )}
                  </View>
                  <View style={{marginTop: responsiveScreenHeight(3)}}>
                    <CustomButton title="Login" onPress={handleSubmit} />
                  </View>
                  <TouchableOpacity
                    style={styles.forgotContent}
                    onPress={() => {
                      navigation.navigate('ForgotUserName');
                    }}>
                    <Text style={{...styles.linkText}}>
                      Forgot User Name / ID ?
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{marginTop: responsiveScreenHeight(2)}}
                    onPress={() => {
                      navigation.navigate('ForgotPassword');
                    }}>
                    <Text style={styles.linkText}>Forgot Password ?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.header}>Don’t have an account ?</Text>
              <CustomButton
                title="Register"
                buttonStyle={styles.registerButton}
                buttonTextStyle={{
                  color: colors.NeonAquaBlue,
                  fontSize: responsiveScreenFontSize(2),
                  fontFamily: 'SourceSansPro-SemiBold',
                }}
                onPress={() => {
                  navigation.navigate('Registration');
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginComponent;
