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
  logo: {
    marginHorizontal: responsiveScreenWidth(3),
  },
  form: {
    marginHorizontal: responsiveScreenWidth(3),
  },
  content: {
    marginTop: responsiveScreenHeight(2),
  },
  forgotContent: {
    marginTop: responsiveScreenHeight(2),
  },
  linkText: {
    textDecorationLine: 'underline',
    fontSize: responsiveScreenFontSize(2.5),
    color: colors.NeonAquaBlue,
    fontFamily: 'SourceSansPro-Regular',
  },
  errorMessage: {
    fontSize: responsiveScreenWidth(4),
    fontFamily: 'SourceSansPro-Regular',
    color: 'red',
  },
  TextInputs: {
    marginTop: responsiveScreenHeight(1),
    borderRadius: responsiveScreenWidth(2),
    borderColor: colors.borderColor,
    borderWidth: 1,
    height: responsiveScreenHeight(5),
    fontSize: responsiveScreenFontSize(2.5),
    fontFamily: 'SourceSansPro-Regular',
    paddingHorizontal: responsiveScreenWidth(2),
    color: colors.GunPowder,
  },
  labelText: {
    marginTop: responsiveScreenHeight(2),
    fontSize: responsiveScreenFontSize(2.5),
    fontFamily: 'SourceSansPro-Regular',
    color: colors.customBlack,
  },
  header: {
    color: colors.Grey_Grey,
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'SourceSansPro-Regular',
    marginLeft: responsiveScreenWidth(2),
    marginBottom: responsiveScreenHeight(2),
  },
  registerButton: {
    borderColor: colors.NeonAquaBlue,
    borderWidth: 1,
    borderRadius: 4,
    width: responsiveScreenWidth(95),
    height: responsiveScreenHeight(5),
    marginHorizontal: responsiveScreenWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: responsiveScreenHeight(2),
  },
});
export default styles;
