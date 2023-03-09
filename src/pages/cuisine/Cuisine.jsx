import React, { useEffect, useState } from "react";
import { Grid, Card,CuisineTitle } from "./Cuisine.styled";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=2a9ca303b605432f9405626327808970&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div>
      <Grid 
       initial={{ scale: 0, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       transition={{ duration: 1.3, delay: 0.7 }}>
        {cuisine.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={'/recipe/' + item.id}>
              <img src={item.image} alt={item.title} />
              <CuisineTitle>{item.title}</CuisineTitle>
              </Link>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
}

export default Cuisine;
