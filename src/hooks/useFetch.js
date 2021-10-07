import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState({ data: null, loading: true, error: null });
      try {
        const response = await fetch(url);
        const data = await response.json();
        const resources = response.headers.get("resources");
        setState({
          data,
          resources,
          loading: null,
          error: null,
        });
      } catch (error) {
        setState({ data: null, loading: null, error });
      }
    };

    fetchData();
  }, [url]);

  return state;
};
