import { useEffect, useState } from "react";
import { searchHeroesByName } from "../requests.js";

function useSearchResults(name) {
  const [searchList, setSearchListContent] = useState([]);
  const [characterNotFound, setcharacterNotFound] = useState(false);
  const [isLoading, setLoadingState] = useState(true);
  const uppercaseName = name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    setLoadingState(true);
    searchHeroesByName(name).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        setSearchListContent([]);
        setcharacterNotFound(true);
        setLoadingState(false);
        return;
      }

      const { results } = data;

      setSearchListContent(results);
      setLoadingState(false);
    });
  }, [name]);

  return [searchList, characterNotFound, isLoading, uppercaseName];
}

export default useSearchResults;
