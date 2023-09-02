import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, Button, CheckBox, Alert } from 'react-native';

const ScreenComponent = () => {
  const [isSelected, setSelection] = useState(false);

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [{
      text: "Cancel",
      style: "cancel"
    }, {
      text: "OK"
    }]);
  };

  return <SafeAreaView style={_styles.YjsUVDoU}>
      <Image style={_styles.dFUnxXjO} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={_styles.FPxEwrJO}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={_styles.XxjYEpEH} />
        <Text style={_styles.NtmsuDsv}>Automatic login</Text>
      </View>
      <Button title="Privacy Policy" onPress={() => {}} />
      <Button title="Terms and Conditions" onPress={() => {}} />
      <Button title="Change Password" onPress={() => {}} />
      <Button title="Delete Account" onPress={() => {}} />
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  YjsUVDoU: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  dFUnxXjO: {
    width: 100,
    height: 100,
    marginBottom: 50
  },
  FPxEwrJO: {
    flexDirection: "row",
    margin: 20
  },
  XxjYEpEH: {
    alignSelf: "center"
  },
  NtmsuDsv: {
    margin: 8
  }
});