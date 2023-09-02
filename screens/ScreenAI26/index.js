import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, Image } from 'react-native';

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
      }, (_, i) => <Button key={i} title={i.toString()} onPress={() => handlePainRating(i)} color={painRating === i ? 'blue' : 'gray'} />)}
      </View>
      <Button title="Start Therapy" onPress={() => console.log('Start Therapy')} disabled={painRating !== 10} />
      <Button title="Start Second Round of Rating" onPress={() => console.log('Start Second Round of Rating')} disabled={painRating !== 10} />
      <Image style={styles.ekgImage} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Button title={isEKGRunning ? 'Stop EKG' : 'Start EKG'} onPress={handleEKG} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  ekgImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20
  }
});
export default PainRatingScreen;