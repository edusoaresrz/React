import { Link, useParams } from "react-router-dom";
import { useRequest } from "../hooks/useRequest";
import { useEffect } from "react";

const UserDetails = () => {
  const { id } = useParams();

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const { data: user, httpConfig, loading } = useRequest(url);

  useEffect(() => {
    httpConfig(null, "GET");
  }, [httpConfig]);

  if (loading) {
    return <p>Carregando detalhes do usuário</p>;
  }

  if (!user) {
    return <p>Usuário não encontrado.</p>;
  }

  return (
    <div>
      <h2>Detalhes do Usuário</h2>
      <h2>Nome: {user.name}</h2>
      <p>Nome de usuário: {user.userName}</p>
      <p>Telefone: {user.telefone}</p>
      <p>Email: {user.email}</p>
      <Link to="/">Voltar para Home</Link>
    </div>
  );
};

export default UserDetails;
