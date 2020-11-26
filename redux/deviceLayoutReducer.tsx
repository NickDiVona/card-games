import * as types from './actionTypes';


interface ActionType { 
  type: string;
  payload: string;
}

type Action = ActionType

export interface DeviceLayoutType {
  [state: string]: {
    device: string;
    iconDimensions: number;
    iconUpperMargin: number;
    grayContainerWidth: string;
    titleTextSize: number;
    yellowTitleTextSize: number;
    descriptionTextSize: number;
  };
}
  
// export interface StateType {
//       device: string;
//       iconDimensions: number;
//       iconUpperMargin: number;
//       grayContainerWidth: string;
//       titleTextSize: number;
//       yellowTitleTextSize: number;
//       descriptionTextSize: number;
//   }



const INITIAL_STATE = {
  device: 'desktop',
  iconDimensions: 150,
  iconUpperMargin: 50,
  grayContainerWidth: '80%',
  titleTextSize: 36,
  yellowTitleTextSize: 18,
  descriptionTextSize: 14
};

export const deviceLayoutReducer = (
  state = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case types.CHANGE_DEVICE_TO_SMALL_PHONE:
      return {
        device: 'smallPhone',
        iconDimensions: 80,
        iconUpperMargin: 20,
        grayContainerWidth: '80%',
        titleTextSize: 18,
        yellowTitleTextSize: 14,
        descriptionTextSize: 12
      };

    // 375 or narrower
    case types.CHANGE_DEVICE_TO_MEDIUM_PHONE:
      return {
        device: 'mediumPhone',
        iconDimensions: 80,
        iconUpperMargin: 20,
        grayContainerWidth: '80%',
        titleTextSize: 18,
        yellowTitleTextSize: 14,
        descriptionTextSize: 12
      };

    // 414 or narrower
    case types.CHANGE_DEVICE_TO_LARGE_PHONE:
      return {
        device: 'largePhone',
        iconDimensions: 100,
        iconUpperMargin: 20,
        grayContainerWidth: '80%',
        titleTextSize: 24,
        yellowTitleTextSize: 14,
        descriptionTextSize: 12
      };

    // 768 or narrower
    case types.CHANGE_DEVICE_TO_PORTRAIT_TABLET:
      return {
        device: 'portraitTablet',
        iconDimensions: 120,
        iconUpperMargin: 40,
        grayContainerWidth: '80%',
        titleTextSize: 36,
        yellowTitleTextSize: 14,
        descriptionTextSize: 14
      };

    // 1080 or narrower
    case types.CHANGE_DEVICE_TO_LANDSCAPE_TABLET:
      return {
        device: 'landscapeTablet',
        iconDimensions: 120,
        iconUpperMargin: 40,
        grayContainerWidth: '80%',
        titleTextSize: 36,
        yellowTitleTextSize: 14,
        descriptionTextSize: 14
      }

    case types.CHANGE_DEVICE_TO_DESKTOP:
      return INITIAL_STATE;

    default:
      return state;
  }
};
