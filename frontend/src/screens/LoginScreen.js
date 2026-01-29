import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import InputField from '../components/InputField';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <InputField
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <InputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <AppButton title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default LoginScreen;
