import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home'
import AuthScreen from '../screens/Auth'
import AuthContext from '../contexts/auth'

const Stack = createNativeStackNavigator();

export default function App() {
  const [auth, setAuth] = React.useState({
    authed: false,
    token: '',
  })

  const makeLogin = () => {
    setAuth({
      authed: true,
      token: 'aaaa'
    })
  }

  const makeLogout = () => {
    setAuth({
      authed: false,
      token: ''
    })
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        makeLogin,
        makeLogout,
      }}>
      <NavigationContainer>
        {auth.authed ?
          (
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          ) :
          (
            <Stack.Navigator>
              <Stack.Screen name="Auth" component={AuthScreen} />
            </Stack.Navigator>
          )
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

