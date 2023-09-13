import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../Infrastructure/component/CustomButton/CustomButton';
import colors from '../../Infrastructure/assets/colors/colors';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {responsiveScreenFontSize} from '../../Infrastructure/utils/screenUtility';
const MyAccount = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text style={styles.header}>Don’t have an account ?</Text>
        <CustomButton
          title="Go to my profile"
          buttonStyle={styles.registerButton}
          buttonTextStyle={{
            color: colors.NeonAquaBlue,
            fontSize: responsiveScreenFontSize(2.5),
            fontFamily: 'SourceSansPro-SemiBold',
          }}
          onPress={() => {
            navigation.navigate('MyProfile');
          }}
        />
      </View>
    </View>
  );
};

export default MyAccount;
