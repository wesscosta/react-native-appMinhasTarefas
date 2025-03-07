import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Minhas Tarefas" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="tarefas" options={{ title: "Lista de Tarefas" }} />
      <Stack.Screen name="perfil" options={{ title: "Perfil" }} />
    </Stack>
  );
}
