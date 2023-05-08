import React, { Component, useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Calendar as RNCalendar } from 'react-native-calendars';
import Chatter from '../components/Chatter';
import LiveFeed from '../components/Navigation';
import SettingsButtons from '../components/Settings';

import { get, save } from '../app/modules/Storage';
import { Colors } from '../app/theme';

const Tab = createBottomTabNavigator();

class CalendarScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <RNCalendar />
      </View>
    );
  }
}

class NavigateScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LiveFeed />
      </View>
    );
  }
}

class ChatScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Chatter />
      </View>
    );
  }
}

class SupportScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>to do</Text>
      </View>
    );
  }
}

class AccountSettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SettingsButtons />
      </View>
    );
  }
}

export default class Workspace extends Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Calendar') {
                iconName = focused
                  ? 'calendar-today'
                  : 'calendar-today';
              } else if (route.name === 'Navigate') {
                iconName = focused
                 ? 'navigation' 
                 : 'navigation';
              } else if (route.name === 'ChatBot') {
                iconName = focused ? 'chat' : 'chat';
              } else if (route.name === 'Support') {
                iconName = focused ? 'support-agent' : 'support-agent';
              } else if (route.name === 'Account Settings') {
                iconName = focused ? 'settings' : 'settings';
              }

              // You can return any component that you like here!
              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Calendar" component={CalendarScreen} />
          <Tab.Screen name="Navigate" component={NavigateScreen} />
          <Tab.Screen name="ChatBot" component={ChatScreen} />
          <Tab.Screen name="Support" component={SupportScreen} />
          <Tab.Screen name="Account Settings" component={AccountSettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    //justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    minWidth: 200,
    alignItems: 'center',
    flexDirection: 'row',
    //justifyContent: 'space-between',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 18,
  },
});
