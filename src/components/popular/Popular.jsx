import { useEffect, useState } from "react";
import { Wrapper, Card, Gradient } from "./Popular.styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=fdf85b0c99a94f089619d468b30d32cf&number=9"
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <>
      <Wrapper>
        <h3>Popular Picks</h3>
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
          {popular?.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Gradient />
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
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
