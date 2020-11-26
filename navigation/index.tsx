//system
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDimensions } from '@react-native-community/hooks';
//user
import ShuffleScreen from '../screens/ShuffleScreen';
import { DeviceLayoutType } from '../redux/deviceLayoutReducer';
import { theme } from '../assets/theme';
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const LeftDrawerNav = () => {
  //kinda weird but it works. Duplicate of line 15 in App.tsx
  const sideBarWidth = useDimensions().window.width * 0.2;

  return (
    <Drawer.Navigator
      openByDefault={true}
      drawerType={'permanent'}
      drawerStyle={[styles.drawerStyle, { width: sideBarWidth }]}
      drawerContentOptions={{
        activeTintColor: theme.systemColors.activeTextColor,
        inactiveTintColor: theme.systemColors.inactiveTextColor
      }}
    >
      <Drawer.Screen
        name="Shuffle"
        component={ShuffleScreen}
        options={{
          // drawerIcon: () => (
          //   <Image
          //     source={require('../assets/pcIcon.png')}
          //     style={styles.imageStyle}
          //   />
          // )
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  );
};

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={ShuffleScreen} />
    </BottomTab.Navigator>
  );
};

const SelectedNavigator = () => {
  const currentDeviceType = useSelector(
    (state: DeviceLayoutType) => state.deviceLayout
  );

  if (
    currentDeviceType.device === 'desktop' ||
    currentDeviceType.device === 'landscapeTablet' ||
    currentDeviceType.device === 'portraitTablet'
  ) {
    return <LeftDrawerNav />;
  } else {
    return <BottomTabNav />;
  }
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <SelectedNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 25,
    height: 25,
    tintColor: theme.systemColors.inactiveTextColor
  },
  drawerStyle: {
    alignItems: 'flex-end',
    backgroundColor: theme.systemColors.bgColor,
    borderRightColor: theme.systemColors.disabledColor,
    borderRightWidth: 1
  }
});

export default AppNavigator;
