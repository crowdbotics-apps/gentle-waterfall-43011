import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, Image, StyleSheet, CheckBox, Picker } from 'react-native';

const ScreenComponent = () => {
  const [machinery, setMachinery] = useState(false);
  const [electrodes, setElectrodes] = useState(false);
  const [painRating, setPainRating] = useState("0");
  const [protocol, setProtocol] = useState("Protocol 1");
  return <SafeAreaView style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox value={machinery} onValueChange={setMachinery} />
        <Text style={styles.label}>Machinery is turned on</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={electrodes} onValueChange={setElectrodes} />
        <Text style={styles.label}>Electrodes are attached</Text>
      </View>
      <Picker selectedValue={painRating} onValueChange={itemValue => setPainRating(itemValue)}>
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
      <Picker selectedValue={protocol} onValueChange={itemValue => setProtocol(itemValue)}>
        <Picker.Item label="Protocol 1" value="Protocol 1" />
        <Picker.Item label="Protocol 2" value="Protocol 2" />
        <Picker.Item label="Protocol 3" value="Protocol 3" />
      </Picker>
      <Button title="Begin session" onPress={() => {}} />
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Button title="Stop EKG" onPress={() => {}} />
      <Button title="Start EKG" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  checkbox: {
    alignSelf: 'center'
  },
  label: {
    margin: 8
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20
  }
});
export default ScreenComponent;