import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const WrapperList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 32px;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 100px;
  height: 100px;
  cursor: pointer;
  transform: scale(0.8);

  
   @media (max-width: 640px) {
    width: 80px;
  height: 80px;
  margin-right: 24px;
  }

  @media (max-width: 440px) {
    width: 70px;
  height: 70px;
  margin-right: 18px;
  }

  
  @media (max-width: 360px) {
    width: 60px;
  height: 60px;
  margin-right: 12px;
  }

  h4 {
    color: white;
    font-size: 18px;

       @media (max-width: 640px) {
 font-size: 12px;
  }
  }

 
  
  svg {
    color: white;
    font-size: 32px;

     @media (max-width: 640px) {
 font-size: 28px;
  }
  }

  
  &.active {
    background: linear-gradient(to right, #109bad, #2ead8e);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

`;
