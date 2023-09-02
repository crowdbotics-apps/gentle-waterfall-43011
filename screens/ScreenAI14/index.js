import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, FlatList, Image, ScrollView } from 'react-native';

const SessionScreen = () => {
  const [selectedSession, setSelectedSession] = useState(null);
  const sessions = [{
    id: '1',
    name: 'Session 1',
    threshold: 5,
    painLevel: 3
  }, {
    id: '2',
    name: 'Session 2',
    threshold: 7,
    painLevel: 4
  } // Add more sessions as needed
  ];
  return <SafeAreaView style={_styles.aBJlYUMb}>
      <View style={_styles.VqOSLIrP}>
        <Button title="Start new session" onPress={() => {}} />
      </View>
      <View style={_styles.cWFgRdbK}>
        <Text style={_styles.RavvnrHL}>Previous Sessions</Text>
        <FlatList data={sessions} keyExtractor={item => item.id} renderItem={({
        item
      }) => <Text style={_styles.NmxwSmac} onPress={() => setSelectedSession(item)}>
              {item.name}
            </Text>} />
      </View>
      {selectedSession && <ScrollView style={_styles.vYASuPlN}>
          <Text style={_styles.UbqFhnEQ}>Session Details</Text>
          <Text style={_styles.IRFWdoSd}>Threshold: {selectedSession.threshold}</Text>
          <Text style={_styles.WZySelTZ}>Pain Level: {selectedSession.painLevel}</Text>
          <Image style={_styles.LxUfUnpC} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
          <Text style={_styles.uCUmdiwd}>Graphical View</Text>
          <Image style={_styles.kDeYETEF} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        </ScrollView>}
    </SafeAreaView>;
};

export default SessionScreen;

const _styles = StyleSheet.create({
  aBJlYUMb: {
    flex: 1,
    backgroundColor: "#fff"
  },
  VqOSLIrP: {
    padding: 20
  },
  cWFgRdbK: {
    padding: 20
  },
  RavvnrHL: {
    fontSize: 20,
    fontWeight: "bold"
  },
  NmxwSmac: {
    fontSize: 18
  },
  vYASuPlN: {
    padding: 20
  },
  UbqFhnEQ: {
    fontSize: 20,
    fontWeight: "bold"
  },
  IRFWdoSd: {
    fontSize: 18
  },
  WZySelTZ: {
    fontSize: 18
  },
  LxUfUnpC: {
    width: "100%",
    height: 200
  },
  uCUmdiwd: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  kDeYETEF: {
    width: "100%",
    height: 200
  }
});