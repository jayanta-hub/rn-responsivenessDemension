import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import WELCOMESVG from '../../../Infrastructure/assets/images/welcome.svg';
import styles from './styles';
import CustomButton from '../../../Infrastructure/component/CustomButton/CustomButton';
import colors from '../../../Infrastructure/assets/colors/colors';
import {responsiveScreenFontSize} from '../../../Infrastructure/utils/screenUtility';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';

const TimeLine = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: theme.colors.surface,
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <WELCOMESVG width="250px" height="250px" />
          <Text style={styles.TextStyle}>Welcome !!!</Text>
          <Text style={styles.TextStyle}>To React Native Boiler Plate.</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <CustomButton
            title="Go to myprofile"
            buttonStyle={styles.registerButton}
            buttonTextStyle={{
              color: theme.colors.onSurfaceVariant,
              fontSize: responsiveScreenFontSize(2),
              fontFamily: 'SourceSansPro-SemiBold',
            }}
            onPress={() => {
              // navigation.navigate('My Account');
              navigation.navigate('MY ACCOUNT', {screen: 'MyProfile'});
            }}
          />
          <Text style={[styles.TextStyle, {color: theme.colors.primary}]}>
            Welcome !!!
          </Text>
          <Text style={styles.TextStyle}>To React Native Boiler Plate.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TimeLine;
