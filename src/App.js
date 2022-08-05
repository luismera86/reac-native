import { StyleSheet, Text, View } from 'react-native';

import { FormList } from './components';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <FormList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#8D99AE',
   paddingHorizontal: 20
  },
});
