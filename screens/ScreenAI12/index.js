import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
const data = [{
  id: "1",
  name: "Patient 1"
}, {
  id: "2",
  name: "Patient 2"
}, {
  id: "3",
  name: "Patient 3"
} // Add more patients as needed
];

const ScreenComponent = ({
  navigation
}) => {
  const connectionState = "GREEN"; // Replace with actual connection state

  return <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.espText}>ESP: <Text style={{
          color: connectionState
        }}>{connectionState}</Text></Text>
      </View>
      <View style={styles.sideMenu}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <Text>Name, Email</Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
        <FlatList data={data} keyExtractor={item => item.id} renderItem={({
        item
      }) => <TouchableOpacity onPress={() => navigation.navigate("PatientDetailScreen", {
        id: item.id
      })}>
              <Text>{item.name}</Text>
            </TouchableOpacity>} />
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI10");
      }}>
          <Text style={styles.buttonText}>Add new Patient</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  topBar: {
    height: 50,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  espText: {
    color: "#333",
    fontSize: 16
  },
  sideMenu: {
    padding: 20
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    width: 269,
    height: 16
  }
});
export default ScreenComponent;