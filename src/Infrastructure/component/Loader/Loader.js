import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator, Text} from 'react-native';
import colors from '../../assets/colors/colors';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../utils/screenUtility';
const Loader = props => {
  // props.status
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={props?.status}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={props?.status}
            color={colors.linkColor}
            size={25}
          />
          <Text
            style={{
              color: colors.linkColor,
              fontSize: responsiveScreenFontSize(2.5),
            }}>
            Loading...
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: colors.PrussianBlue,
  },
  activityIndicatorWrapper: {
    backgroundColor: colors.mainWhite,
    height: responsiveScreenHeight(13),
    width: responsiveScreenWidth(30),
    borderRadius: responsiveScreenWidth(3),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loader;
