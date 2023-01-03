import { useNavigate } from "react-router";
import { useState } from "react";

function useSearch({searchFormId}) {
    const [searchInputValue, setSearchInputValue] = useState("");

    const navigate = useNavigate();
  
    const input = document.getElementById({searchFormId});

    const handleChange = (event) => {
      setSearchInputValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate(`/search/${searchInputValue}`);
      setSearchInputValue("");
      input.value = "";
    };

  return [handleChange, handleSubmit];
}

export default useSearch;
