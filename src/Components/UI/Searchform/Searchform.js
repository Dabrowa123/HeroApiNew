import React from "react";
import usePerformSearch from "../../../hooks/usePerformSearch.js";

function Searchform({ formId, classBlockName }) {
  const [handleChange, handleSubmit] = usePerformSearch("search-input-landing");

  return (
    <form className={`${classBlockName}`} onSubmit={handleSubmit}>
      <input
        className={`${classBlockName}__input`}
        id={formId}
        onChange={handleChange}
        type="text"
        name="search"
        placeholder="&nbsp;type hero name"
        required
      />

      <button className={`${classBlockName}__button`}>Find Hero</button>
    </form>
  );
}

export default Searchform;
