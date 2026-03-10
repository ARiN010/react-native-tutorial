import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';;
import FormSignUp from './components/FormSignUp';

export default function App() {
  return(
    <View style={Style.container}>
      <Header/>
      <FormSignUp/>
      <View>
        <text>Cadastro</text>
      </View>
    <StatusBar style='auto'/>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white",
    alignItems:'center',
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    padding:20,
    color: "#22dcfc",
    textDecorationLine:"underline",
  }
})



