import {StyleSheet} from 'react-native';
import colors from '../../../Infrastructure/assets/colors/colors';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../../Infrastructure/utils/screenUtility';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },

  TextStyle: {
    fontSize: responsiveScreenFontSize(2.5),
    fontFamily: 'SourceSansPro-Regular',
    color: colors.customBlack,
  },
  registerButton: {
    borderColor: colors.NeonAquaBlue,
    borderWidth: 1,
    borderRadius: responsiveScreenWidth(2),
    width: responsiveScreenWidth(60),
    height: responsiveScreenHeight(5),
    // marginLeft: responsiveScreenWidth(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: responsiveScreenWidth(2),
  },
});
export default styles;
