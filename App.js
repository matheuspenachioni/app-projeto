
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./src/screens/Login"
import NewUser from "./src/screens/NewUser"
import Game from "./src/screens/Game"
import NewGame from "./src/screens/NewGame"
import Details from "./src/screens/Details/"
import Profile from "./src/screens/Profile/"
import NewProfile from "./src/screens/NewProfile/"
import ProfileDetails from "./src/screens/ProfileDetails/"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="New User"
          component={NewUser}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Games"
          component={Game}
          options={{
            headerTintColor: "#325ca8",
            headerLeft: null,
          }}
        />
        <Stack.Screen 
          name="New Game"
          component={NewGame}
          options={{
            headerTintColor: "#325ca8",
          }}
        />
        <Stack.Screen 
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#325ca8",
          }}
        />
        <Stack.Screen 
          name="Profiles"
          component={Profile}
          options={{
            headerTintColor: "#325ca8",
            headerLeft: null,
          }}
        />
        <Stack.Screen 
          name="New Profile"
          component={NewProfile}
          options={{
            headerTintColor: "#325ca8",
          }}
        />
        <Stack.Screen 
          name="Profile Details"
          component={ProfileDetails}
          options={{
            headerTintColor: "#325ca8",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}