import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, Image, StyleSheet, TextInput, Picker, CheckBox } from 'react-native';

const App = () => {
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [selectedValue, setSelectedValue] = useState("0");
  const [note, setNote] = useState("");
  return <SafeAreaView style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected1} onValueChange={setSelection1} style={styles.checkbox} />
        <Text style={styles.label}>Turn off machine</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected2} onValueChange={setSelection2} style={styles.checkbox} />
        <Text style={styles.label}>Remove electrode</Text>
      </View>
      <Text style={styles.label}>Enter patient post procedure pain rating</Text>
      <Picker selectedValue={selectedValue} style={styles.RWxLoIkO} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
      </Picker>
      <Text style={styles.label}>Enter patient note</Text>
      <TextInput style={styles.input} onChangeText={setNote} value={note} placeholder="Enter note" />
      <Button title="End Session" onPress={() => console.log('End Session')} />
      <Text style={styles.title}>Session overview</Text>
      <Text style={styles.title}>Session details</Text>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  checkbox: {
    alignSelf: "center"
  },
  label: {
    margin: 8
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    width: 200,
    height: 200
  },
  RWxLoIkO: {
    height: 50,
    width: 150
  }
});
export default App;