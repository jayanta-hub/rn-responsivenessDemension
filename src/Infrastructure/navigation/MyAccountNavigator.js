import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import Back from '../component/back/Back';
import ComingSoon from '../component/ComingSoon/ComingSoon';
import {Menu} from 'react-native-paper';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../utils/screenUtility';
import {AuthContext} from '../utils/context';
import Entypo from 'react-native-vector-icons/Entypo';
import MyAccount from '../../presentation/components/MyAccount';

const HomeStack = createStackNavigator();

const MyAccountNavigator = props => {
  const MyAccountRight = props => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const {signOut} = React.useContext(AuthContext);
    const showAlert = () => {
      Alert.alert(
        '',
        'Would you like to Logout',
        [
          {
            text: 'No',
            onPress: () => console.log('close'),
            style: 'cancel',
          },
          {text: 'Yes', onPress: () => signOut()},
        ],
        {cancelable: false},
      );
    };
    return (
      <TouchableOpacity>
        <View
          style={{
            marginRight: responsiveScreenWidth(3),
          }}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            style={{
              zIndex: 100,
              marginTop: responsiveScreenHeight(4),
            }}
            anchor={
              <TouchableOpacity onPress={openMenu}>
                <Entypo color="#687C93" name="dots-three-vertical" size={20} />
              </TouchableOpacity>
            }>
            <Menu.Item
              onPress={() => {
                showAlert();
              }}
              title="Logout"
              style={{height: responsiveScreenHeight(5)}}
            />
          </Menu>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <HomeStack.Navigator initialRouteName="My Account">
        <>
          <HomeStack.Screen
            name="My Account"
            component={MyAccount}
            options={{
              title: 'My Account',
              headerLeft: () => <Back />,
              headerRight: () => MyAccountRight(),
              headerStyle: {borderBottomWidth: 1, borderColor: '#00000029'},
              headerBackTitleVisible: false,
              headerTitleStyle: {
                fontSize: responsiveScreenFontSize(2.5),
                color: '#4D4F5C',
                fontFamily: 'SourceSansPro-SemiBold',
              },
            }}
          />
          <HomeStack.Screen
            name="MyProfile"
            component={ComingSoon}
            options={{
              title: 'My Profile',
              headerLeft: () => <Back />,
              headerRight: () => MyAccountRight(),
              headerStyle: {borderBottomWidth: 1, borderColor: '#00000029'},
              headerBackTitleVisible: false,
              headerTitleStyle: {
                fontSize: responsiveScreenFontSize(2.5),
                color: '#4D4F5C',
                fontFamily: 'SourceSansPro-SemiBold',
              },
            }}
          />
        </>
      </HomeStack.Navigator>
    </>
  );
};

export default connect(null, null)(MyAccountNavigator);
