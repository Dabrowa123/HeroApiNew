import React from "react";
import useSearch from "../../hooks/useSearch.js";

function NavSearchform() {
  const [handleChange, handleSubmit] = useSearch("search-input");

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="search-input"
        onChange={handleChange}
        type="text"
        name="search-nav"
        placeholder=" Type hero name"
        required
      />

      <button>find hero!</button>
    </form>
  );
}

export default NavSearchform;
