import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Card } from "./Searched.styled";
import { Link } from "react-router-dom";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=2a9ca303b605432f9405626327808970&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <>
      <Grid>
        {searchedRecipes.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={'/recipe/' + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              </Link>
            </Card>
          );
        })}
      </Grid>
    </>
  );
}

export default Searched;
