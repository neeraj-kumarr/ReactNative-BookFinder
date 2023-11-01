import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import HomeScreen from './Components/HomeScreen';

function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;
