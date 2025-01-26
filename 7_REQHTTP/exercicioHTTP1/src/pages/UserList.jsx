import { Link } from "react-router-dom";
import "./UserList.css";
import FormAddUser from "../components/FormAddUser";
import { useRequest } from "../hooks/useRequest";

const UserList = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const { data: users, loading, error } = useRequest(url);

  return (
    <div className="container-user-list">
      <h1>Lista de usuários</h1>
      {error && <p>{error}</p>}
      {loading && <p>Carregando dados</p>}
      <ul>
        {users &&
          users.map((user) => (
            <div key={user.id} className="user-list">
              <li>{user.name}</li>
              <Link to={`/users/${user.id}`}>Detalhes do usuário</Link>
            </div>
          ))}
      </ul>
      <FormAddUser />
    </div>
  );
};

export default UserList;
