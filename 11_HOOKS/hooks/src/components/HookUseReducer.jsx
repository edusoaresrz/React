import { useReducer, useState } from "react";

const HookUseReducer = () => {
  // 1 - começando com o useReducer

  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // 2 - avançando no useReducer
  const initialTasks = [
    { id: 1, text: "Fazer alguma coisa" },
    { id: 2, text: "Fazer outra coisa" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD": {
        const newTask = {
          id: Math.random(),
          text: action.payload,
        };

        return [...state, newTask];
      }
      case "DELETE":
        return state.filter((task) => task.id !== action.id);

      default:
        return state;
    }
  };

  const [tasksText, setTasksText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatchTasks({ type: "ADD", payload: tasksText });
    setTasksText("");
  };

  const deleteTasks = (taskId) => {
    dispatchTasks({ type: "DELETE", id: taskId });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número</button>
      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setTasksText(event.target.value)}
          value={tasksText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <div key={task.id}>
          <li>{task.text}</li>
          <button onClick={() => deleteTasks(task.id)}>Deletar</button>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
