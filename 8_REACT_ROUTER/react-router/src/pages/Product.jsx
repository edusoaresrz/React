import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  // 4 - rota dinâmica
  const { id } = useParams();

  // 5 - carregamento dinâmico
  const url = `http://localhost:3000/products/${id}`;

  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <p>O ID do produto é {id}</p>
      {error && <p>Ocorreu um erro</p>}
      {loading && <p>Carregando dados</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$: {product.price}</p>
          {/* 6 - nested routes */}
          <Link to={`/products/${product.id}/info`}>Mais detalhes</Link>
        </div>
      )}
    </>
  );
};

export default Product;
