import styles from "./Register.module.css";

import { useState, useEffect } from "react";

//person hook
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histótias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuario"
            onChange={(event) => setDisplayName(event.target.value)}
            value={displayName}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Email do usuario"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </label>
        <label>
          <span>Confirme sua senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
            onChange={(event) => setConfirmPassword(event.target.value)}
            value={confirmPassword}
          />
        </label>
        {loading ? (
          <button className="btn" disabled>
            Aguarde...
          </button>
        ) : (
          <button className="btn">Cadastrar</button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
