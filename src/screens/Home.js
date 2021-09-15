import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useAuth } from '../contexts/auth';

export default function HomeScreen({ navigation }) {
  const { makeLogout } = useAuth();

  const loginButton = () => {
    makeLogout();
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Login"
        onPress={loginButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(248, 248, 250)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
