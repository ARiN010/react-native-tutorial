import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Header from './components/Header';
import Component from './components/Component';

export default function App() {
  return(
    <View style={styles.container}>
      <Header/>

      <View style={styles.grid}>
        <View style={styles.row}>
      <Component
        avatar={"https://artwalk.vtexassets.com/arquivos/ids/217891/Tenis-Nike-Air-270-React-Feminino-Multicolor.jpg?v=637079751219130000"}
        nome={"Tênis Nike Air Max 270 React"}
        preco={"R$ 1.299,99"}
       />
      <Component 
      avatar={"https://magicfeet.vtexassets.com/arquivos/ids/250678-800-auto?v=638853471785770000&width=800&height=auto&aspect=true"}
      nome={"Tênis Air Jordan 1 "}
      preco={"R$ 1.149,90"}/>
      </View>
      
      <View style={styles.row}>
      <Component 
      avatar ={"https://andaraki.fbitsstatic.net/img/p/tenis-nike-feminino-court-vision-alta-75201/289485.jpg?w=575&h=575&v=no-change&qs=ignore"}
      nome={"Tênis nike feminino"}
      preco={"R$ 1.099,90"}/>

      <Component
      avatar={"https://imgnike-a.akamaihd.net/1300x1300/031644IGA1.jpg"}
      nome={"Tênis Nike Air max "}
      preco={"R$ 1.299,99"}
       />
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  
  },
  grid: {
    gap: '15px',
  },
  row: {
    flexDirection: 'row',
      gap: '15px',
  }
}) 


