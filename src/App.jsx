import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import ReturnTask from "./components/ReturnTask";
import FooterTask from "./components/FooterTask";
import "./App.css";

function App() {
  // Mis variables de estado
  const [list, setList] = useState([]);

  // Uso un efecto
  useEffect(() => {
    if (window.localStorage.getItem("tasks")) {
      setList(JSON.parse(window.localStorage.getItem("tasks")));
    }
  }, []);

  // Funcion para guardar la lista de tareas
  const saveList = (task) => {
    const newList = [...list, task];
    setList(newList);
    window.localStorage.setItem("tasks", JSON.stringify(newList));
  };

  // Funcion para establecer un id personalizado
  const getId = () => {
    let id;
    list.forEach((item) => {
      id = item.id;
    });
    const numId = id ? id.split("task-").join("") : 0;
    return numId;
  };

  // Funcion para quitar un objeto de referencia de un arreglo
  const dropList = (index) => {
    const dropTask = [...list];
    const newDropTask = dropTask
      .slice(0, index)
      .concat(dropTask.slice(index + 1, dropTask.length));
    setList(newDropTask);
    window.localStorage.setItem("tasks", JSON.stringify(newDropTask));
  };

  return (
    <main>
      <AddTask saveList={saveList} getId={getId} />
      <ReturnTask list={list} dropList={dropList} />
      <FooterTask listLength={list.length} />
    </main>
  );
}

export default App;
