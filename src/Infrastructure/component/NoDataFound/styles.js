import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../utils/screenUtility';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: colors.Matterhorn,
    fontSize: responsiveScreenFontSize(16),
    fontFamily: 'SourceSansPro-Semibold',
  },
  Image: {
    width: responsiveScreenWidth(200),
    height: responsiveScreenHeight(200),
  },
});

export default styles;
