import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { WrapperList, StyledLink } from "./Category.style";

function Category() {
  return (
    <>
      <WrapperList>
        <StyledLink to={"/cuisine/Italian"}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </StyledLink>
        <StyledLink to={"/cuisine/American"}>
          <FaHamburger />
          <h4>American</h4>
        </StyledLink>
        <StyledLink to={"/cuisine/Thai"}>
          <GiNoodles />
          <h4>Thai</h4>
        </StyledLink>
        <StyledLink to={"/cuisine/Japanese"}>
          <GiChopsticks />
          <h4>Japanese</h4>
        </StyledLink>
      </WrapperList>
    </>
  );
}

export default Category;
