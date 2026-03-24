import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";

export default function Content({ avatar, nome, email }) {

    return (
        <>
            <View style={styles.contato}>
                <Image  style={styles.circuloContato} 
                        source={avatar}
                />
                <View style={{ flexDirection: "column", marginLeft: 20 }}>
                    <Text style={styles.nomeContato}>{nome}</Text>
                    <Text style={styles.emailContato}>{email}</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    contato: {
    backgroundColor: "#45e796ff",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 8,
  },
  circuloContato: {
    width: 45, // Largura
    height: 45, // Altura igual à largura
    borderRadius: 23, // Metade da largura/altura
    backgroundColor: "#488677",
    marginLeft: 10,
  },
  nomeContato: {
    fontSize: 16,
    fontWeight: "bold",
  },
  emailContato: {
    fontSize: 14,
    color: "#666",
    textDecorationLine: "underline",
    cursor: "pointer",
  }
});