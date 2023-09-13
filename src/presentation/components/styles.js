import {StyleSheet} from 'react-native';
import colors from '../../Infrastructure/assets/colors/colors';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Infrastructure/utils/screenUtility';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  logo: {
    marginHorizontal: responsiveScreenWidth(20),
  },
  form: {
    marginHorizontal: responsiveScreenWidth(20),
  },
  content: {
    marginTop: responsiveScreenHeight(20),
  },
  forgotContent: {
    marginTop: responsiveScreenHeight(16),
  },
  linkText: {
    textDecorationLine: 'underline',
    fontSize: responsiveScreenFontSize(14),
    color: colors.NeonAquaBlue,
    fontFamily: 'SourceSansPro-Regular',
  },
  errorMessage: {
    fontSize: responsiveScreenFontSize(10),
    fontFamily: 'SourceSansPro-Regular',
    color: 'red',
    marginLeft: responsiveScreenWidth(5),
  },
  TextInputs: {
    marginTop: responsiveScreenHeight(5),
    borderRadius: 4,
    borderColor: colors.borderColor,
    borderWidth: 1,
    height: responsiveScreenHeight(40),
    fontSize: responsiveScreenFontSize(14),
    fontFamily: 'SourceSansPro-Regular',
    paddingHorizontal: responsiveScreenWidth(10),
    color: colors.GunPowder,
  },
  labelText: {
    marginTop: responsiveScreenHeight(10),
    fontSize: responsiveScreenFontSize(16),
    fontFamily: 'SourceSansPro-Regular',
    color: colors.customBlack,
  },
  header: {
    color: colors.Grey_Grey,
    fontSize: responsiveScreenFontSize(2.5),
    fontFamily: 'SourceSansPro-Regular',
    marginLeft: responsiveScreenWidth(10),
    marginBottom: responsiveScreenHeight(2),
  },
  registerButton: {
    borderColor: colors.NeonAquaBlue,
    borderWidth: 1,
    borderRadius: 4,
    width: responsiveScreenWidth(60),
    height: responsiveScreenHeight(5),
    marginLeft: responsiveScreenWidth(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: responsiveScreenHeight(5),
  },
});
export default styles;
