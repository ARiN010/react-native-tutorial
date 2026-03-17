import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

export default function FormSignUp() {
  const [name, setName] = useState("Lily");
  const [email, setEmail] = useState("lily@gmail.com");
  const [pass, setPass] = useState("12345");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = async () => {
    console.log({ name, email, pass, avatar });
    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, pass, avatar }),
    });
    if (response.ok) {
      console.log("Usuário cadastrado com sucesso!");
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Erro ao cadastrar usuário");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          value={pass}
          onChangeText={setPass}
          secureTextEntry
        />
        <TextInput
          placeholder="avatar"
          style={styles.input}
          value={avatar}
          onChangeText={setAvatar}
        />

        <Button
          title="Cadastrar"
          onPress={handleSubmit}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = {
  form: {
    gap: 10,
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ff8800",
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
  },
};
