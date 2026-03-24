import { StyleSheet, Text, View } from 'react-native';
import Forms from './components/FormSignUp';
import { StatusBar } from 'react-native-web';

export default function App() {
return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Cadastro</Text>
      </View>
      <View>
      <Forms />
      <StatusBar style="auto" />
      </View>
    </View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "white",
alignItems: 'center',
},
title: {
fontSize: 24,
fontWeight: "bold",
padding: 20,
color: "#ff8800",
textDecorationLine: "underline",
}
})