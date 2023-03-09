import { useEffect, useState } from "react";
import {PopularTitle,  Wrapper, Card, Gradient } from "./Popular.styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=2a9ca303b605432f9405626327808970&number=9"
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));

      setPopular(data.recipes);
    }
  };

  return (
    <>
      <Wrapper>
        <PopularTitle>Popular Picks</PopularTitle>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "50px",
            breakpoints: {
              1200: { perPage: 3, gap: "20px" },
              900: { perPage: 3, gap: "20px" },
              674: { perPage: 3, gap: "20px" },
              350: { perPage: 2, gap: "20px" },
            },
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'/recipe/' + recipe.id}>
                  <Gradient />
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </>
  );
}

export default Popular;
