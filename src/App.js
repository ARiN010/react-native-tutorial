import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Content from './components/Content'
import { useEffect, useState} from 'react';
import Component from './components/Component'

export default function App() {
  
  const [users,setUsers] = useState([]) 

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:3333/user")
      const data = await response?.json()
      if(response.ok){
        console.log(data.users)
        setUsers(data.users)
      }else{
        console.error("Erro ao buscar usuários", data)
      }
    }
    getUsers()
  }, [])

return (
<View style={styles.container}>

      <Header />

      <Text style={styles.texto}>Lista de contatos</Text>
      <StatusBar style="auto" />

      <View style={{ gap: 15 }}>
        <Content
          avatar= {"https://i.pinimg.com/236x/4a/ac/58/4aac58bff8913ee5547fd927baae093e.jpg"}
          nome= {"Maria"}
          email= {"maria@contato.com"}
        />
        <Content
          avatar= {"https://tiermaker.com/images/templates/floptok-memes--1197126/11971261656065445.jpg"}
          nome= {"Maria"}
          email= {"maria@contato.com"}
        />
        <Content
          avatar= {"https://i.pinimg.com/236x/7a/82/bb/7a82bb95a817a172e4a08946bcb0b3fa.jpg"}
          nome= {"João"}
          email= {"joao@contato.com"}
        />
      </View>

    </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2fff5ff',
    alignItems: 'center',
//justifyContent: 'center',
},
  texto: {
    color: "black",
    fontSize: 18,
    marginBottom: 20,
}
});
