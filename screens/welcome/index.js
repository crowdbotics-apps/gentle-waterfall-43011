import { Pressable } from "react-native";
import React, { useEffect } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = ({
  navigation
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.logo} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI2");
      }}><Text style={styles.text}>Welcome to IMPULS!</Text></Pressable>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 200
  },
  text: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "bold"
  }
});
export default WelcomeScreen;