import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { turnOffBattleMode } from "../store/index.js";

function useBattleMode() {
  const battleMode = useSelector((state) => {
    return state.battleMode[0];
  });
  const dispatch = useDispatch();
  const disableBattleMode = () => dispatch(turnOffBattleMode());

  return [battleMode, disableBattleMode];
}

export default useBattleMode;
