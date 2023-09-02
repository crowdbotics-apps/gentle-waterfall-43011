import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View, Alert } from 'react-native';

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (!email.includes('@')) {
      Alert.alert('Invalid email address');
      return;
    } // SendGrid API call to send password reset link goes here

  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Enter registered email" keyboardType="email-address" />
      <View style={styles.buttonContainer}>
        <Button title="Reset Password" onPress={handleResetPassword} />
        <Button title="Cancel" color="red" onPress={() => setEmail('')} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default ResetPasswordScreen;