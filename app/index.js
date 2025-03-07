import { View, Text, Button } from "react-native";
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Bem-vindo ao Minhas Tarefas!</Text>
      <Button title="Entrar" onPress={() => router.push("/login")} />
    </View>
  );
}

