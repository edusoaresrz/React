import "./FormAddUser.css";

import { useState, useEffect } from "react";
import { useRequest } from "../hooks/useRequest";

const FormAddUser = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const { httpConfig } = useRequest(url);

  const resetState = () => {
    setName("");
    setUserName("");
    setEmail("");
    setTelefone("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      name,
      userName,
      telefone,
      email,
    };

    httpConfig(user, "POST");

    resetState();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar novo usuário</h2>
      <label>
        Nome:
        <input
          type="text"
          placeholder="Digite seu nome"
          required
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </label>
      <label>
        Nome de usuário:
        <input
          type="text"
          placeholder="Digite o seu nome de usuário"
          required
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
        />
      </label>
      <label>
        Telefone:
        <input
          type="number"
          placeholder="Digite seu número de tefefone"
          required
          onChange={(event) => setTelefone(event.target.value)}
          value={telefone}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          placeholder="Digite seu email"
          required
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default FormAddUser;
