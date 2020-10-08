import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}><Text>Hello</Text></View>
      <View style={styles.blueView}><Text>Hello</Text></View>
    </View>
  );
}

// * react-native style은 기본적으로 flexDirection : "column"
// * 화면 크기에 따른 responsive design을 위해서 flex로 구역 크기를 설정하는 것을 추천

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  yellowView: {
    flex: 1,
    backgroundColor: 'yellow',
    textAlign: "center"
  },
  blueView: {
    flex: 3,
    backgroundColor: 'skyblue',
    textAlign: "center"
  }
});
