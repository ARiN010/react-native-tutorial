import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Header from './components/Header';
import Component from './components/Component';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Lista de Contatos</Text>
      <StatusBar style="auto" />
      <Component />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  }
});
