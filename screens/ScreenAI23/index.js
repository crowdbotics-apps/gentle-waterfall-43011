import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Session details</Text>
        <Text style={styles.text}>Threshold progress: 0 / 60 Impulses</Text>
        <Text style={styles.text}>Next simulation</Text>
        <Text style={styles.text}>IBI: 1770</Text>
        <Text style={styles.text}>Last update time</Text>
        <Text style={styles.text}>Next threshold determination value</Text>
      </View>
      <Pressable><View style={styles.section}>
        <Button title="Emergency stop" color="#f00" onPress={() => {}} />
        <Button title="Restart therapy" color="#00f" onPress={() => {}} />
        <Button title="End" color="#0f0" onPress={() => {}} style={styles.edJwStpK} />
      </View></Pressable>
      <View style={styles.section}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI25");
    }}><Text style={styles.BcuvYNjm}></Text></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  section: {
    marginVertical: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 18,
    marginBottom: 5
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  edJwStpK: {
    position: "absolute",
    flexDirection: "row",
    flex: 1
  },
  BcuvYNjm: {
    width: 354,
    height: 30,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 4,
    top: -290
  }
});
export default ScreenComponent;