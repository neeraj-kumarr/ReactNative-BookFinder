import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { BooksDataProvider } from './Context/BooksData';
import BookScreen from './Components/BookScreen';

function App() {
  return (
    <BooksDataProvider>
      <View style={styles.container}>
        <BookScreen />
      </View>
    </BooksDataProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;
