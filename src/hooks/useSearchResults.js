import { useEffect, useState } from "react";
import { searchHeroesByName } from "../requests.js";
import useBattleMode from "./useBattleMode.js";

function useSearchResults(name) {
  const [searchList, setSearchListContent] = useState([]);
  const [characterNotFound, setCharacterNotFound] = useState(false);
  const [isLoading, setLoadingState] = useState(true);
  const [pageInitState, setPageInitState] = useState(true);
  const [battleMode] = useBattleMode();
  const uppercaseName = name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    if (name === "") {
      return;
    }
    setPageInitState(false);
    setLoadingState(true);
    searchHeroesByName(name).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        setSearchListContent([]);
        setCharacterNotFound(true);
        setLoadingState(false);
        return;
      }

      const { results } = data;

      setSearchListContent(results);

      if (battleMode) {
        // Do not render heroes with empty powerstats
        const validatedResults = results.flatMap((hero) =>
          Object.values(hero.powerstats).includes("null", 0) ? [] : hero
        );
        setSearchListContent(validatedResults);
      } else {
        setSearchListContent(results);
      }

      setPageInitState(false);
      setCharacterNotFound(false);
      setLoadingState(false);
    });
    // eslint-disable-next-line
  }, [name]);

  return [
    searchList,
    characterNotFound,
    isLoading,
    uppercaseName,
    pageInitState,
  ];
}

export default useSearchResults;
