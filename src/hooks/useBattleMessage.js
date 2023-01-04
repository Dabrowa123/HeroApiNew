import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useBattleMessage() {
  const winners = useSelector((state) => {
    return state.winners[0];
  });
  const [resultMessage, setResultMessage] = useState();

  useEffect(() => {
    if (winners === "heroes") {
      setResultMessage("Heroes won");
    } else if (winners === "villains") {
      setResultMessage("Villains won");
    } else if (winners === "") {
      setResultMessage("No heroes, no villains won - a draw");
    }
  }, [winners]);

  return [resultMessage];
  //   return [resultMessage, errorMessage];
}

export default useBattleMessage;
