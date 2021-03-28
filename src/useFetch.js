import { useState, useEffect } from "react";

export const useFetch = url => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setResponse(json.results);
    };
    doFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return response;
};
export default useFetch;
