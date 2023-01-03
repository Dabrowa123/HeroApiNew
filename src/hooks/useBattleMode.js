import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { turnOffBattleMode, turnOnBattleMode } from "../store/index.js";

function useBattleMode() {
  const battleMode = useSelector((state) => {
    return state.battleMode[0];
  });
  const dispatch = useDispatch();
  const enableBattleMode = () => dispatch(turnOnBattleMode());
  const disableBattleMode = () => dispatch(turnOffBattleMode());

  return [battleMode, enableBattleMode, disableBattleMode];
}

export default useBattleMode;
