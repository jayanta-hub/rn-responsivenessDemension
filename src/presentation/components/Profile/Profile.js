import React from 'react';
import {View, Text, Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../../Infrastructure/utils/screenUtility';
import {connect} from 'react-redux';
import {getUserInformation} from '../../../application/store/actions/timeLine';
import colors from '../../../Infrastructure/assets/colors/colors';
const Profile = props => {
  const PrimEmail = [];
  let userInformation = props?.userInformation?.data
    ? props?.userInformation?.data
    : [];
  props?.userInformation?.data?.emailContacts
    ? props?.userInformation?.data?.emailContacts.filter(items => {
        if (items.type.description === 'Primary') {
          PrimEmail.push({Primary: items.email});
        }
      })
    : null;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        marginRight: responsiveScreenWidth(-7),
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',

          marginLeft: responsiveScreenWidth(3.5),
        }}>
        {userInformation?.profileImage ? (
          <View>
            <Image
              style={{
                width: responsiveScreenWidth(20),
                height: responsiveScreenHeight(10),
                borderRadius: responsiveScreenWidth(4),
              }}
              source={{
                uri: `data:image/png;base64,${userInformation.profileImage}`,
              }}
            />
          </View>
        ) : (
          <Avatar.Image
            size={responsiveScreenWidth(15)}
            source={require('../../../Infrastructure/assets/images/avatar.png')}
          />
        )}
      </View>
      <View
        style={{
          flex: 7,
          justifyContent: 'center',
          marginLeft: responsiveScreenWidth(6),
        }}>
        <Text
          style={{
            fontFamily: 'SourceSansPro-Regular',
            fontSize: responsiveScreenFontSize(2.5),
            color: colors.Chambray,
            textTransform: 'uppercase',
          }}>
          {userInformation?.firstName
            ? `${userInformation.firstName} ${userInformation.lastName}`
            : '--'}
        </Text>
        <Text
          style={{
            fontFamily: 'SourceSansPro-Bold',
            fontSize: responsiveScreenFontSize(2.5),
            color: colors.LightSlateGrey,
          }}>
          {userInformation?.email ? `${userInformation.email}` : '--'}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <AntDesign name="right" size={responsiveScreenWidth(5)} />
      </View>
    </View>
  );
};
const mapStateToProps = ({timeLine: {userInformation}}) => ({
  userInformation,
});
const mapDispatchToProps = {
  getUserInformation: authToken => getUserInformation(authToken),
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
