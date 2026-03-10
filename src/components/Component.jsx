import { StyleSheet, View, Text } from "react-native";
import { useState, useEffect } from "react";
import { Image } from "expo-image"
export default function Content({avatar, nome, preco}) {

    const [nome, setnome] = useState("Árion")

    useEffect(()=> {console.log("teste")
        
    }, [nome])

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
        width:230,
        height:230,
        backgroundColor: '#d6bdec',
        borderRadius: '10px',
        marginBottom: '20px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#9a3cde',
        alignItems: 'center',


    },
    image: {
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius:5

    },
    nomeContato: {
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',  
        paddingBottom: '5px',
        paddingLeft: '10px',
        fontSize: 13,
        paddingTop:4
    },
    precoContato: {
        color: '#d9d9d9',
        fontSize: '16px',
        paddingLeft: '10px',
    },
});