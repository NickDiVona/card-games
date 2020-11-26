import * as types from './actionTypes'

export const changeToSmallPhone = () => {
  return {
    type: types.CHANGE_DEVICE_TO_SMALL_PHONE
  };
};

export const changeToMediumPhone = () => {
  return {
    type: types.CHANGE_DEVICE_TO_MEDIUM_PHONE
  };
};

export const changeToLargePhone = () => {
  return {
    type: types.CHANGE_DEVICE_TO_LARGE_PHONE
  };
};

export const changeToPortraitTablet = () => {
  return {
    type: types.CHANGE_DEVICE_TO_PORTRAIT_TABLET
  };
};

export const changeToLandscapeTablet = () => {
  return {
    type: types.CHANGE_DEVICE_TO_LANDSCAPE_TABLET
  };
};

export const changeToDesktop = () => {
  return {
    type: types.CHANGE_DEVICE_TO_DESKTOP
  };
};