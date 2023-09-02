import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';

const DeviceScreen = () => {
  const [devices, setDevices] = useState([{
    id: '1',
    name: 'Device 1'
  }, {
    id: '2',
    name: 'Device 2'
  }, {
    id: '3',
    name: 'Device 3'
  } // Add more devices as needed
  ]);

  const handleConnect = device => {
    alert(`Connecting to ${device.name}`);
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bluetooth Devices</Text>
      <FlatList data={devices} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.deviceContainer}>
            <Image style={styles.deviceImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <Text style={styles.deviceName}>{item.name}</Text>
            <TouchableOpacity style={styles.connectButton} onPress={() => handleConnect(item)}>
              <Text style={styles.connectButtonText}>Connect</Text>
            </TouchableOpacity>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20
  },
  deviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  deviceImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  deviceName: {
    flex: 1,
    fontSize: 18
  },
  connectButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5
  },
  connectButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default DeviceScreen;