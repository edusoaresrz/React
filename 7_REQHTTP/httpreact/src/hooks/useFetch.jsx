import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - refatorando o post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - loading
  const [loading, setLoading] = useState(false);

  // 7 - tratando erros
  const [error, setError] = useState(null);

  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMethod(method);
      setItemId(data);
    }
  };

  // Minha opção do desafio 6

  // const removeItens = async (id) => {
  //   setLoading(true);

  //   try {
  //     await fetch(`${url}/${id}`, { method: "DELETE" });

  //     setData((prevData) => prevData.filter((data) => data.id !== id));
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   setLoading(false);
  // };

  useEffect(() => {
    const fecthData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        const dataJson = await res.json();

        setData(dataJson);
      } catch (error) {
        console.log(error);

        setError("Houve um erro no carregamento de dados");
      }

      setLoading(false);
    };

    fecthData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      let dataJson;

      if (method === "POST") {
        const fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        dataJson = await res.json();

        setCallFetch(dataJson);
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl, config);

        dataJson = await res.json();
      }

      setCallFetch(dataJson);
    };

    httpRequest();
  }, [config, method, url, itemId]);

  return { data, httpConfig, loading, error };
};
