import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, Switch, Button, StyleSheet } from 'react-native';

const PrivacySettingsScreen = () => {
  const [permissions, setPermissions] = useState({
    location: false,
    camera: false,
    microphone: false,
    contacts: false
  });

  const toggleSwitch = permission => {
    setPermissions({ ...permissions,
      [permission]: !permissions[permission]
    });
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button title="Back" onPress={() => {}} />
        <Text style={styles.title}>{"Privacy Policy"}</Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <View style={styles.body}>
        {Object.keys(permissions).map((permission, index) => <View key={index} style={styles.permissionContainer}>
            <Text style={styles.permissionText}>{permission}</Text>
            <Switch trackColor={{
          false: "#767577",
          true: "#81b0ff"
        }} thumbColor={permissions[permission] ? "#f5dd4b" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={() => toggleSwitch(permission)} value={permissions[permission]} />
          </View>)}
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  body: {
    padding: 20
  },
  permissionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  permissionText: {
    fontSize: 18
  }
});
export default PrivacySettingsScreen;