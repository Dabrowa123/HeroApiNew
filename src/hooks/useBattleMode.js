import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

function useBattleMode() {
  const [battleMode, setbattleMode] = useState(false);
  const currentLocation = useLocation();

  const searchedNameToBattle = useSelector((state) => {
    return state.searchedNameToBattle[0];
  });

  useEffect(() => {
    if (currentLocation.pathname === "/battle" || searchedNameToBattle !== "") {
      setbattleMode(true);
    } else {
      setbattleMode(false);
    }
    // eslint-disable-next-line
  }, [currentLocation.pathname]);

  const disableBattleMode = () => {
    setbattleMode(false);
  };

  return [battleMode, disableBattleMode];
}

export default useBattleMode;
