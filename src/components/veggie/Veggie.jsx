import { useEffect, useState } from "react";
import { VegetarianTitle, Wrapper, Card, Gradient } from "./Veggie.styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=2a9ca303b605432f9405626327808970&number=9&tags=vegetarian"
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));

      setVeggie(data.recipes);
    }
  };

  return (
    <>
      <Wrapper>
        <VegetarianTitle>Our Vegetarian Picks</VegetarianTitle>
        <Splide
          options={{
            perPage: 3,
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
          {veggie.map((recipe) => {
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

export default Veggie;
