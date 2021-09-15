import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useAuth } from '../contexts/auth'

export default function AuthScreen() {
  const { makeLogin  } = useAuth()

  const handleLogin = () => {
    makeLogin();
  }

  return (
    <View style={styles.container}>
      <Text>Auth</Text>
      <Button
        onPress={handleLogin}
        title={"Make login"}
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
