//sys
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
//usr
import { DeviceLayoutType } from '../redux/deviceLayoutReducer';
import {
  changeToSmallPhone,
  changeToMediumPhone,
  changeToLargePhone,
  changeToPortraitTablet,
  changeToLandscapeTablet,
  changeToDesktop
} from '../redux/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../assets/theme';

const RightFillerSpace = () => {
  // const deviceLayout = useTypedSelector(state => state)
  const currentDeviceType = useSelector(
    (state: DeviceLayoutType) => state.deviceLayout
  );
  const dispatch = useDispatch();
  const windowWidth = useDimensions().window.width;

  useEffect(() => {
    if (windowWidth <= 360) {
      dispatch(changeToSmallPhone());
    } else if (windowWidth <= 375) {
      dispatch(changeToMediumPhone());
    } else if (windowWidth <= 414) {
      dispatch(changeToLargePhone());
    } else if (windowWidth <= 768) {
      dispatch(changeToPortraitTablet());
    } else if (windowWidth <= 1080) {
      dispatch(changeToLandscapeTablet());
    } else {
      dispatch(changeToDesktop());
    }

    let msg = `
    -------------
    Width: ${windowWidth}
    Device: ${currentDeviceType.device}
    ------------------
    `;

    console.log(msg);
  }, [windowWidth]);

  // useEffect(() => {
  //   if (windowWidth <= 360) {
  //     dispatch(changeToSmallPhone());
  //   } else if (windowWidth <= 375) {
  //     dispatch(changeToMediumPhone());
  //   } else if (windowWidth <= 414) {
  //     dispatch(changeToLargePhone());
  //   } else if (windowWidth <= 768) {
  //     dispatch(changeToTablet());
  //   } else {
  //     dispatch(changeToDesktop());
  //   }
  // })

  if (
    currentDeviceType.device === 'desktop' ||
    currentDeviceType.device === 'landscapeTablet'
  ) {
    return (
      <View
        style={{
          backgroundColor: theme.systemColors.bgColor,
          height: '100%',
          width: windowWidth * 0.15,
          borderLeftColor: theme.systemColors.disabledColor,
          borderLeftWidth: 1
        }}
      />
    );
  }

  return <View />;
};

export default RightFillerSpace;
