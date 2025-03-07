import { useContext } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "../components/TaskItem";

export default function TarefasScreen() {
  const { tasks, addTask } = useContext(TaskContext);

  return (
    <View>
      <Text>Lista de Tarefas</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
      <Button title="Adicionar Tarefa" onPress={() => addTask("Nova Tarefa")} />
    </View>
  );
}
