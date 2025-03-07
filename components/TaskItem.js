import { View, Text, Button } from "react-native";

export default function TaskItem({ task }) {
  return (
    <View>
      <Text>{task.title}</Text>
      <Button title="Concluir" onPress={() => console.log("Tarefa concluída!")} />
    </View>
  );
}
