import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export function SearchWithIcon() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearchClose = () => {
    setShowSearch(false);
  };

  return (
    <>
      <IconButton onClick={handleSearchClick} color="inherit">
        <SearchIcon />
      </IconButton>
      {showSearch && (
        <TextField
          autoFocus
          variant="outlined"
          placeholder="Search"
          size="small"
          onBlur={handleSearchClose}
          fullWidth
        />
      )}
    </>
  );
}