import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, Image } from 'react-native';

const TermsAndConditionsScreen = () => {
  const termsAndConditions = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc et pellentesque facilisis, risus turpis facilisis lectus, in lacinia sem lacus sit amet dui. Nulla facilisi. Sed auctor, nunc in cursus elementum, sem sem convallis eros, id facilisis sem est id enim.";
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.text}>{termsAndConditions}</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  contentContainer: {
    padding: 16
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24
  }
});
export default TermsAndConditionsScreen;