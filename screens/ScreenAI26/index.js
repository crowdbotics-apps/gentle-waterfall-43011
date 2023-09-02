import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const PainRatingScreen = () => {
  const [painRating, setPainRating] = useState(0);
  const [isEKGRunning, setEKGRunning] = useState(false);

  const handlePainRating = value => {
    setPainRating(value);
  };

  const handleEKG = () => {
    setEKGRunning(!isEKGRunning);
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Rate Your Pain</Text>
      <View style={styles.ratingContainer}>
        {Array.from({
        length: 11
      }, (_, i) => <TouchableOpacity key={i} style={painRating === i ? styles.buttonActive : styles.button} onPress={() => handlePainRating(i)}>
              <Text style={styles.buttonText}>{i.toString()}</Text>
            </TouchableOpacity>)}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log("Start Therapy")} disabled={painRating !== 10}>
        <Text style={styles.buttonText}>Start Therapy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log("Start Second Round of Rating")} disabled={painRating !== 10}>
        <Text style={styles.buttonText}>Start Second Round of Rating</Text>
      </TouchableOpacity>
      <Image style={styles.ekgImage} source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} />
      <TouchableOpacity style={styles.button} onPress={handleEKG}>
        <Text style={styles.buttonText}>{isEKGRunning ? "Stop EKG" : "Start EKG"}</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  button: {
    backgroundColor: "gray",
    padding: 10,
    margin: 5,
    borderRadius: 5
  },
  buttonActive: {
    backgroundColor: "blue",
    padding: 10,
    margin: 5,
    borderRadius: 5
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  ekgImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 20
  }
});
export default PainRatingScreen;