import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native-web";
import Fontisto from '@expo/vector-icons/Fontisto';;


export default function Header() {
    return (
        <View style={styles.container}>
          <Fontisto name="shopping-bag-1" size={24} color="black" />

            <text style={styles.text}>Contatos</text>

        </View>
    );
}

const styles = StyleSheet.create({
container: {
    backgroundColor: "#77ca8cff",
    width: "100%",
    height: "60px",
    marginBottom: "20px",
    flexDirection: "row",
    alignItems: "center",
},
 circulo: {

    marginLeft: 20,
  },
    text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    }
});