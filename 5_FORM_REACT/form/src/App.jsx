import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  const userData = {
    name: "Eduardo Soares",
    email: "edusoares@gmail.com",
    bio: "Eu sou um usuário do sistema",
    role: "user",
  };

  return (
    <>
      <h1>Forms</h1>
      <MyForm user={userData} />
    </>
  );
}

export default App;
