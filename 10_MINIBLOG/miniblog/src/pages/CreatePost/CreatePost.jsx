import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useAuthValue } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [fomrError, setFormError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Pense num bom título..."
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URl da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que representa seu post"
            onChange={(event) => setImage(event.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(event) => setBody(event.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas pos vírgula"
            onChange={(event) => setImage(event.target.value)}
            value={image}
          />
        </label>
        <button className="btn">Cadastrar</button>
        {/* {loading ? (
          <button className="btn" disabled>
            Aguarde...
          </button>
        ) : (
          <button className="btn">Cadastrar</button>
        )}
        {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  );
};

export default CreatePost;
