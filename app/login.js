import { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = () => {
    login(username);
    router.push("/tarefas");
  };

  return (
    <View>
      <Text>LOGIN</Text>
      <TextInput placeholder="Usuário" value={username} onChangeText={setUsername} />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
