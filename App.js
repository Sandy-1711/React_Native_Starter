import { Alert, Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { NavigationContainer, useIsFocused, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EvilIcons, Feather, FontAwesome, FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import AccountScreen from './screens/AccountScreen';
import FriendsScreen from './screens/FriendsScreen';
import ActivityScreen from './screens/ActivityScreen';
import GroupsScreen from './screens/GroupsScreen';
import AddExpenseButton from './components/ui/AddExpenseButton';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {


  return <NavigationContainer>
    <View style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}>


      <Tab.Navigator screenOptions={{
        tabBarStyle: {
          height: 60
        },
        headerLeft: () => {
          return <Pressable onPress={() => {
            ToastAndroid.show("Ad Pressed", ToastAndroid.SHORT)
          }} style={{ padding: 6, flexDirection: 'row', gap: 8, paddingHorizontal: 8, marginLeft: 10, borderRadius: 10, borderWidth: 2, borderColor: "lightgray" }}>
            <FontAwesome name="diamond" size={16} color="purple" />
            <Text style={{ fontSize: 13, color: 'purple', fontWeight: '700' }}>50% off</Text>
          </Pressable>
        },
        tabBarLabelStyle: {
          color: 'green',
          fontWeight: '500'
        },
        headerTitle: '',
        headerRight: () => {
          return <Pressable style={{ marginRight: 10 }}>
            <EvilIcons name="search" size={24} color="black" />
          </Pressable>
        }
      }}>
        <Tab.Screen
          name="Groups"
          options={{
            tabBarLabel: () => {
              const focused = useIsFocused();
              return <Text style={focused ? { color: 'green', fontSize: 12, fontWeight: '600' } : { color: 'gray', fontSize: 12, fontWeight: '400' }}>Groups</Text>
            },
            tabBarIcon: () => {
              const focused = useIsFocused()
              if (focused) {
                return <MaterialIcons name="groups" size={24} color={"green"} />
              }
              return <MaterialIcons name="groups" size={24} color={"gray"} />
            }
          }}
          component={GroupsScreen} />
        <Tab.Screen name="Friends"
          options={{
            tabBarLabel: () => {
              const focused = useIsFocused();
              return <Text style={focused ? { color: 'green', fontSize: 12, fontWeight: '600' } : { color: 'gray', fontSize: 12, fontWeight: '400' }}>Friends</Text>
            },
            tabBarIcon: () => {
              const focused = useIsFocused()
              if (focused) {
                return <FontAwesome6 name="user" size={16} color="green" />
              }
              return <FontAwesome6 name="user" size={16} color="gray" />
            }
          }}
          component={FriendsScreen} />
        <Tab.Screen name="Activity"
          options={{
            tabBarLabel: () => {
              const focused = useIsFocused();
              return <Text style={focused ? { color: 'green', fontSize: 12, fontWeight: '600' } : { color: 'gray', fontSize: 12, fontWeight: '400' }}>Activity</Text>
            },
            tabBarIcon: () => {
              const focused = useIsFocused()
              if (focused) {
                return <Feather name="activity" size={18} color="green" />
              }
              return <Feather name="activity" size={18} color="gray" />
            }
          }}
          component={ActivityScreen} />
        <Tab.Screen name="Account"
          options={{
            tabBarLabel: () => {
              const focused = useIsFocused();
              return <Text style={focused ? { color: 'green', fontSize: 12, fontWeight: '600' } : { color: 'gray', fontSize: 12, fontWeight: '400' }}>Account</Text>
            },
            tabBarIcon: () => {
              const focused = useIsFocused()
              if (focused) {
                return <MaterialIcons name="manage-accounts" size={24} color="green" />
              }
              return <MaterialIcons name="manage-accounts" size={24} color="gray" />
            }
          }}
          component={AccountScreen} />
      </Tab.Navigator>


      <AddExpenseButton />

    </View>
  </NavigationContainer >
}

