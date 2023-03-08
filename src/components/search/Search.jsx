import React from "react";
import { useState } from "react";
import {
  StyledSearch,
  StyledForm,
  StyledButton,
  StyledLabel,
  StyledInput,
} from "./Search.styled";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <StyledSearch>
      <StyledForm onSubmit={submitHandler}>
        <StyledButton type="submit">
          <BsSearch size="20px" color="#fff" />
          <StyledLabel> Search</StyledLabel>
        </StyledButton>
        <StyledInput
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          name="search"
          autoComplete="off"
          autoFocus
          placeholder=""
        />
      </StyledForm>
    </StyledSearch>
  );
}

export default Search;
