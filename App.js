import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import { Slot } from "expo-router";

export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Slot/>
      </TaskProvider>
    </AuthProvider>
  );
}
