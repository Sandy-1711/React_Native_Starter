import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/ProfileScreen';
import { AntDesign } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();

export default function App() {

  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{
        // headerShown: false
        headerStyle: {
          backgroundColor: 'blue'
        }
      }} component={HomeScreen} />
      <Stack.Screen name="Profile" options={{
        headerStyle: {
          backgroundColor: 'white',
          color: 'white'
        },
        headerTitle: '',
        headerBack: () => { return null },
        headerBackVisible: false,
        headerRight: () => {
          return <Pressable>
            <AntDesign name="search1" size={24} color="black" />
          </Pressable>
        }
      }} component={ProfileScreen} />
    </Stack.Navigator>
  </NavigationContainer>
}


function HomeScreen() {
  const navigation = useNavigation()

  const handleNavigation = () => {
    navigation.navigate('Profile')
  }

  return <View>
    <Text>Hello From HomeScreen</Text>
    <Pressable onPress={handleNavigation} style={{ color: "blue", backgroundColor: 'lightblue', height: 40, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black' }}>Go to profile</Text>
    </Pressable>
  </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeContainer: {

  },
  profileContainer: {

  }
});
