import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "expo-router";

export default function PerfilScreen() {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  return (
    <View>
      <Text>Perfil de {user}</Text>
      <Button title="Sair" onPress={() => { logout(); router.push("/login"); }} />
    </View>
  );
}
