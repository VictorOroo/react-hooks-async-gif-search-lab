import React, { useState } from "react";

function GifSearch({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Gifs..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;
