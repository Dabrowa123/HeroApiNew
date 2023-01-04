import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  turnOffBattleMode,
  turnOnBattleMode,
  searchNameToBattle,
} from "../store/index.js";

function useBattleMode() {
  const currentLocation = useLocation();
  const dispatch = useDispatch();
  const searchedNameToBattle = useSelector((state) => {
    return state.searchedNameToBattle[0];
  });

  useEffect(() => {
    // always disable battle mode when on home page & clear battle search
    if (currentLocation.pathname === "/") {
      dispatch(turnOffBattleMode());
      dispatch(searchNameToBattle(""));
    } else if (
      // always enable battlemode on battle component or checking details of hero from battle search
      currentLocation.pathname === "/battle" ||
      searchedNameToBattle !== ""
    ) {
      dispatch(turnOnBattleMode());
    }
    // eslint-disable-next-line
  }, [currentLocation.pathname]);

  const battleMode = useSelector((state) => {
    return state.battleMode[0];
  });

  return [battleMode];
}

export default useBattleMode;
