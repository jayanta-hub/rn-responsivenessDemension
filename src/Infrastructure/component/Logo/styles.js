import {StyleSheet} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../utils/screenUtility';
const styles = StyleSheet.create({
  Image: {
    width: responsiveScreenWidth(20),
    height: responsiveScreenHeight(20),
    resizeMode: 'contain',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveScreenWidth(5),
  },
});

export default styles;
