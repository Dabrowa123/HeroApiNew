import { useNavigate } from "react-router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchNameToBattle } from "../store/index.js";

function usePerformSearch(searchFormId) {
  const [searchInputValue, setSearchInputValue] = useState("");

  const input = document.getElementById(searchFormId);

  // navigate to site on normal mode
  const navigate = useNavigate();

  // dispatch for battle mode
  const battleMode = useSelector((state) => {
    return state.battleMode[0];
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (battleMode) {
      dispatch(searchNameToBattle(searchInputValue));
    } else {
      navigate(`/search/${searchInputValue}`);
    }
    setSearchInputValue("");
    input.value = "";
  };

  return [handleChange, handleSubmit];
}

export default usePerformSearch;
