import { useState } from 'react'
import InputField from './components/inputField'
import Button from './components/button'
import List from './components/list'

function App() {
  const [inputValues, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (inputValues.trim()){
      setTasks([...tasks,inputValues]);
      setInputValue("");
    }
  }
  const removeTask = (index) => {
    const updatedTask = [...tasks]
    updatedTask.splice(index,1);
    setTasks(updatedTask)
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Simple to do list</h1>
      <InputField inputValue={inputValues} handleInputValue={setInputValue} />
      <Button handleClick={addTask} />
      <List tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App
