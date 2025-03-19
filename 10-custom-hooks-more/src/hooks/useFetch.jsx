import { useEffect, useState } from "react";

// const url = "https://jsonplaceholder.typicode.com/users";
function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        setIspending(true);
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw Error("Something went wrong!");
        }
        const resData = await res.json();
        setData(resData);
        setIspending(false);
        setError(null);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIspending(false);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;
