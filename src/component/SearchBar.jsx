import React, { useState } from "react";

const SearchBar = ({ onSearch, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) {
      onSearch(e.target.value); // Pass the search term to the parent component or handle it here
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder= {placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "0",
        }}
      />
    </div>
  );
};

export default SearchBar;
