import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState("Will I appear or not?");

  return (
    <View style={[
      styles.container
    ]}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>Hello testing the new block</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: "https://tse4.mm.bing.net/th?id=OIP.cC2F4gj4mVUuWrxVCz5a5wHaE7&pid=Api&P=0&h=180"
        }} />
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <Text>I'm showing the latest text from the input - {text}!</Text>
      <View style={{ height: 50, width: 50, backgroundColor: "black" }} />
      <View style={{ height: 50, width: 50, backgroundColor: "blue" }} />
      <View style={{ height: 50, width: 50, backgroundColor: "green" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});
