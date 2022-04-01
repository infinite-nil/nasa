import { useState } from "react";
import { useDebounce } from "react-use";

const DEBOUNCE_TIMEOUT = 300;

const useSearch = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  const handleDebounceChange = () => setDebounceQuery(query);

  useDebounce(handleDebounceChange, DEBOUNCE_TIMEOUT, [query]);

  return {
    query: debounceQuery,
    setQuery,
  };
};

export { useSearch };
