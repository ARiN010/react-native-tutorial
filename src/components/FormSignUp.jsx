import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-web';
import { useState } from 'react';

export default function FormSignUp() {
  const [nome, setNome] = useState("Árion")
  const[email, setEmail]= useState("are@gmail.com")
  const[senha, setSenha] = useState("123teste")
  
    const handleSubmit = () => {
    console.log({ nome, email,senha})
  }
  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.title}>Cadastro</Text>
      <View style={StyleSheet.form}>
        <TextInput style={StyleSheet.input}placeholder="nome" value={nome} onChangeText={setNome}></TextInput>
      <TextInput style={StyleSheet.input}placeholder="email"></TextInput>
      <TextInput style={StyleSheet.input}placeholder="Senha"
        secureTextEntry></TextInput>
      <Button title="Cadastrar" onPress={(handleSubmit) => console.log("Teste Botão")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundcolor:"white",
        alignItems:"center",
    },
    form:{
        width:"90%",
        gap:10,
    },
    input:{
        borderWidth: 1,
        borderColor:"white",
        borderStyle: "solid",
        borderRadius: 6,
        padding: 8,
    },
    title:{
        fontSize: 18,
        fontWeight: "700",
        marginBottom:20,    }
})