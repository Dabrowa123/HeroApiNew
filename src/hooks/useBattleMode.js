import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { turnOffBattleMode, turnOnBattleMode } from "../store/index.js";

function useBattleMode() {
  const currentLocation = useLocation();
  const dispatch = useDispatch();

  const searchedNameToBattle = useSelector((state) => {
    return state.searchedNameToBattle[0];
  });

  // console.log(store.getState());

  useEffect(() => {
    if (currentLocation.pathname === "/battle" || searchedNameToBattle !== "") {
      dispatch(turnOnBattleMode());
    } else {
      dispatch(turnOffBattleMode());
    }
    // eslint-disable-next-line
  }, [currentLocation.pathname]);

  const battleMode = useSelector((state) => {
    return state.battleMode[0];
  });

  return [battleMode];
}

export default useBattleMode;
