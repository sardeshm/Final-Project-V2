import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const SearchBar = ({ onChange }) => {
  return (
    <div>
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => onChange(e.target.value)}
        />

        <SearchIcon />
        <InputAdornment />
      </div>
    </div>
  );
};

export default SearchBar;
