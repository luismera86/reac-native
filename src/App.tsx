import { StyleSheet, Text, View } from 'react-native';

import { Login } from './screens';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
