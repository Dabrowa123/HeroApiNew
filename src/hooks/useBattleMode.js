import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useBattleMode() {
  // Display searchform
  const [battleMode, setbattleMode] = useState(false);

  const searchedNameToBattle = useSelector((state) => {
    return state.searchedNameToBattle[0];
  });

  useEffect(() => {
    if (window.location.pathname === "/battle" || searchedNameToBattle !== "") {
      setbattleMode(true);
    } else {
      setbattleMode(false);
    }
    // eslint-disable-next-line
  }, [window.location.pathname]);

  return battleMode;
}

export default useBattleMode;
