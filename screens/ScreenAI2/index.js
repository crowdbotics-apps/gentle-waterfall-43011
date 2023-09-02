import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, Image, TouchableOpacity, Linking } from 'react-native';

const App = () => {
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.appName}>App Name</Text>
      <TextInput style={styles.input} placeholder="Email address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Log in" color="#841584" />
      <TouchableOpacity onPress={() => console.log('Forgot password')}>
        <Text style={styles.forgotPassword}>Forgot password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('http://example.com')}>
        <Text style={styles.termsAndConditions}>
          By signing-in, I agreed to Terms and Conditions and Privacy policy
        </Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    width: 100,
    height: 100
  },
  appName: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    margin: 10
  },
  forgotPassword: {
    color: 'blue',
    marginTop: 15
  },
  termsAndConditions: {
    color: 'blue',
    marginTop: 15,
    textAlign: 'center'
  }
});
export default App;