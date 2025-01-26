import { useState, useEffect } from "react";

export const useRequest = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      setCallFetch(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        const dataJson = await res.json();

        setData(dataJson);
      } catch (error) {
        setError("Ocoreu um erro na requisição");
        console.log(error);
      }
      setLoading(false);
      setError(null);
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    const httpRequist = async () => {
      if (method === "POST") {
        try {
          const fetchOptions = [url, config];

          const res = await fetch(...fetchOptions);

          const dataJson = await res.json();

          setData(dataJson);
        } catch (error) {
          setError("Houve um erro no carregamento");
          console.log(error);
        }
      }
    };

    if (callFetch) {
      httpRequist();
      setCallFetch(false);
    }
  }, [config, method, callFetch, url]);

  return { data, httpConfig, loading, error };
};
