import React from "react";
import useSearch from "../../../hooks/useSearch.js";

function Searchform() {
  const [handleChange, handleSubmit] = useSearch("search-input-landing");

  return (
    <form className="searchform cf" onSubmit={handleSubmit}>
      <input
        className="searchform__input"
        id="search-input-landing"
        onChange={handleChange}
        type="text"
        name="search-landing"
        placeholder="type hero name"
        required
      />

      <button className="searchform__button">Find Hero</button>
    </form>
  );
}

export default Searchform;
