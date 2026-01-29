import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainerRef } from '@react-navigation/native';
import { DashboardScreen } from '../screens/DashboardScreen';
import { PositionsScreen } from '../screens/PositionsScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

export type RootTabParamList = {
  Dashboard: undefined;
  Positions: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const navigationRef = React.createRef<NavigationContainerRef<RootTabParamList>>();

export function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Positions" component={PositionsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
