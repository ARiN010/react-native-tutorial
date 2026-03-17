import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image"
export default function Content({avatar, nome, preco}) {
    return (
      <View style={styles.container}>
        <Image source={avatar} style={styles.image} />
          <Text style={styles.nomeContato}>{nome}</Text>
          <Text style={styles.precoContato}>{preco}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        width: '500px',
        height: '200px',
        backgroundColor: '#136a7a',
        borderRadius: '10px',
        marginBottom: '20px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#10354d',
        alignItems: 'center',


    },
    image: {
        width: '100%',
        height: '50%',

    },
    nomeContato: {
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',  
        paddingBottom: '5px',
        paddingLeft: '10px'
    },
    precoContato: {
        color: '#d9d9d9',
        fontSize: '16px',
        paddingLeft: '10px'
    },
});