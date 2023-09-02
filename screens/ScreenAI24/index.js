import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, Image, ScrollView } from "react-native";

const SessionScreen = () => {
  const [selectedSession, setSelectedSession] = useState(null);
  const sessions = [{
    id: "1",
    name: "Session 1",
    painLevel: 3,
    stepLevel: 2
  }, {
    id: "2",
    name: "Session 2",
    painLevel: 5,
    stepLevel: 4
  } // Add more sessions as needed
  ];
  return <SafeAreaView style={_styles.iJgxMQne}>
      <View style={_styles.TmLBGOEb}>
        <TouchableOpacity style={_styles.button} onPress={() => {}}>
          <Text style={_styles.buttonText}>Start new session</Text>
        </TouchableOpacity>
      </View>
      <View style={_styles.HrmPYOcl}>
        <Text style={_styles.FqrULQjp}>Previous Sessions</Text>
        <FlatList data={sessions} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.dHXmPflL}>
              <Text style={_styles.aeXlVqiz}>{item.name}</Text>
              <TouchableOpacity style={_styles.button} onPress={() => setSelectedSession(item)}>
                <Text style={_styles.buttonText}>View Details</Text>
              </TouchableOpacity>
            </View>} />
      </View>
      {selectedSession && <ScrollView style={_styles.GrNYOOHT}>
          <Text style={_styles.mdceUNvF}>Session Details</Text>
          <Image style={_styles.wYBTTWRu} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
          <Text style={_styles.uuuwTLpl}>
            Pain Level: {selectedSession.painLevel}
          </Text>
          <Text style={_styles.NdOUqjxt}>
            Step Level: {selectedSession.stepLevel}
          </Text>
        </ScrollView>}
    </SafeAreaView>;
};

export default SessionScreen;

const _styles = StyleSheet.create({
  iJgxMQne: {
    flex: 1,
    backgroundColor: "#fff"
  },
  TmLBGOEb: {
    padding: 20
  },
  HrmPYOcl: {
    padding: 20
  },
  FqrULQjp: {
    fontSize: 20,
    fontWeight: "bold"
  },
  dHXmPflL: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  aeXlVqiz: {
    fontSize: 18
  },
  GrNYOOHT: {
    padding: 20
  },
  mdceUNvF: {
    fontSize: 20,
    fontWeight: "bold"
  },
  wYBTTWRu: {
    width: "100%",
    height: 200
  },
  uuuwTLpl: {
    fontSize: 18,
    marginTop: 20
  },
  NdOUqjxt: {
    fontSize: 18,
    marginTop: 20
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});