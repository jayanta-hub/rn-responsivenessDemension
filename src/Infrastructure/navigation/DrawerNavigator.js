import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Profile from '../../presentation/components/Profile/Profile';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../utils/screenUtility';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Back from '../component/back/Back';
import ComingSoon from '../component/ComingSoon/ComingSoon';
import {AuthContext} from '../utils/context';
import BottomNavigator from './BottomNavigator';
import AntDesign from 'react-native-vector-icons/AntDesign';
const DrawerNavigator = props => {
  const DrawerStack = createDrawerNavigator();
  const {signOut} = React.useContext(AuthContext);

  const CustomDrawer = props => {
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
      <View style={{flex: 1}}>
        <DrawerContentScrollView style={{height: '100%', position: 'relative'}}>
          <DrawerItemList {...props} />

          <View
            style={{
              borderWidth: 0.8,
              borderStyle: 'dashed',
              borderColor: '#C3C3C3',
              marginTop: responsiveScreenHeight(3),
            }}
          />
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
              paddingVertical: responsiveScreenHeight(2),
            }}
            onPress={showAlert}>
            <AntDesign
              name="logout"
              size={20}
              color="#00A8DB"
              style={{
                marginHorizontal: responsiveScreenWidth(2),
              }}
            />
            <Text
              style={{
                fontFamily: 'SourceSansPro-Regular',
                fontSize: responsiveScreenFontSize(2.5),
                color: '#4D4F5C',
                marginLeft: responsiveScreenWidth(5),
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </DrawerContentScrollView>
      </View>
    );
  };
  const SupportTitle = () => {
    return (
      <>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginRight: responsiveScreenWidth(-7),
            marginLeft: responsiveScreenWidth(-7),
            flexDirection: 'row',
            paddingVertical: responsiveScreenHeight(2),
          }}>
          <MaterialIcons
            name="support-agent"
            size={25}
            color="#00A8DB"
            style={{
              marginHorizontal: responsiveScreenWidth(5),
            }}
          />
          <Text
            style={{
              fontFamily: 'SourceSansPro-Regular',
              fontSize: responsiveScreenFontSize(2.5),
              color: '#4D4F5C',
            }}>
            Help & Support
          </Text>
        </View>
      </>
    );
  };
  const TermsTitle = () => {
    return (
      <>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: responsiveScreenWidth(-7),
            marginLeft: responsiveScreenWidth(-7),
          }}>
          <AntDesign
            name="form"
            size={20}
            color="#00A8DB"
            style={{
              marginHorizontal: responsiveScreenWidth(5),
            }}
          />

          <Text
            style={{
              fontFamily: 'SourceSansPro-Regular',
              fontSize: responsiveScreenFontSize(2.5),
              color: '#4D4F5C',
            }}>
            Terms & Conditions
          </Text>
        </View>
      </>
    );
  };
  return (
    <DrawerStack.Navigator
      initialRouteName="Profile"
      options={{headerShown: false}}
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={navigation => ({
        drawerItemStyle: {
          marginBottom: -20,
        },
      })}>
      <DrawerStack.Screen
        options={{
          headerShown: false,
          title: props => <Profile {...props} />,
          drawerItemStyle: {marginTop: 0},
        }}
        name="Profile"
        component={BottomNavigator}
      />
      <DrawerStack.Screen
        name="Help & Support"
        component={ComingSoon}
        options={{
          title: props => <SupportTitle {...props} />,
          headerStyle: {borderBottomWidth: 1, borderColor: '#00000029'},
          headerLeft: props => <Back />,
          headerTitle: props => (
            <Text
              style={{
                color: '#4D4F5C',
                fontSize: responsiveScreenFontSize(2.5),
                fontFamily: 'SourceSansPro-Semibold',
              }}>
              Support
            </Text>
          ),
        }}
      />
      <DrawerStack.Screen
        name="Terms & Conditions"
        component={ComingSoon}
        options={{
          title: props => <TermsTitle {...props} />,
          headerStyle: {borderBottomWidth: 1, borderColor: '#00000029'},
          headerLeft: props => <Back />,
          headerTitle: props => (
            <Text
              style={{
                color: '#4D4F5C',
                fontSize: responsiveScreenFontSize(2.5),
                fontFamily: 'SourceSansPro-Semibold',
              }}>
              Support
            </Text>
          ),
        }}
      />
    </DrawerStack.Navigator>
  );
};

export default DrawerNavigator;
