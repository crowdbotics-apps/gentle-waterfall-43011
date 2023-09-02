import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';

const AddPatientScreen = () => {
  const [gender, setGender] = useState('male');
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Add new patient</Text>
      <TextInput placeholder="Patient ID" style={styles.input} />
      <TextInput placeholder="Patient Mobile Number" style={styles.input} />
      <Text style={styles.subtitle}>Personal information</Text>
      <Picker selectedValue={gender} onValueChange={itemValue => setGender(itemValue)} style={styles.input}>
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
      <TextInput placeholder="Year of birth" style={styles.input} />
      <TextInput placeholder="Height" style={styles.input} />
      <TextInput placeholder="BMI" style={styles.input} />
      <TextInput placeholder="Residence" style={styles.input} />
      <TextInput placeholder="1st Aliment" style={styles.input} />
      <TextInput placeholder="2nd Aliment" style={styles.input} />
      <TextInput placeholder="Enrolment date" style={styles.input} />
      <TextInput placeholder="Notes" style={styles.input} multiline />
      <View style={styles.buttonContainer}>
        <Button title="Abort" color="red" onPress={() => {}} />
        <Button title="Add patient" color="green" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
export default AddPatientScreen;