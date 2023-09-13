import {View, Image} from 'react-native';
import React from 'react';
import {responsiveHeight, responsiveWidth} from '../../utils/screenUtility';
import colors from '../../assets/colors/colors';
import LOGOSVG from '../../assets/images/Underconstruction.svg';
const ComingSoon = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.mainWhite,
        }}>
        <LOGOSVG width="250px" height="200px" />
        <Image
          style={{
            width: responsiveWidth(50),
            height: responsiveHeight(20),
            zIndex: 100,
            resizeMode: 'contain',
          }}
          source={require('../../assets/images/comingSoon.png')}
        />
      </View>
    </>
  );
};

export default ComingSoon;
