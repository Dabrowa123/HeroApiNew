import React from "react";
import "./Searchform.css";

function Searchform() {
  return (
      <form className="landing__searchform searchform cf">
        <input type="text" placeholder="Is it me you’re looking for?" />
        <button type="submit">Find Hero</button>
      </form>
  );
}

export default Searchform;
