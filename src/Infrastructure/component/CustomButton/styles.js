import {StyleSheet} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../../Infrastructure/utils/screenUtility';
import colors from '../../assets/colors/colors';
const styles = StyleSheet.create({
  Button: {
    backgroundColor: colors.NeonAquaBlue,
    height: responsiveScreenHeight(6),
    borderRadius: responsiveScreenWidth(4),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Buttontext: {
    color: colors.White,
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'SourceSansPro-Bold',
  },
});
export default styles;
