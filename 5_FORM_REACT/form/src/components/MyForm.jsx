import { useState } from "react";
import PropTypes from "prop-types";
import "./MyForm.css";

const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email, bio, role);
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* 1 criação do input */}
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 label envolvendo o input */}
        <div>
          <label>
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Bio:</span>
            <textarea
              name="bio"
              placeholder="Descrição do usuário"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div>
          <label>
            <select
              name="role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            >
              <option value="admin">Administrador</option>
              <option value="user">Usúario</option>
              <option value="singer">Cantor</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpar" />
      </form>
    </div>
  );
};

MyForm.propTypes = {
  user: PropTypes.object,
};

export default MyForm;
