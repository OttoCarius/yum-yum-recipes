import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 48px;
  padding: 0 60px;

  @media (max-width: 460px) {
    padding: 0 30px;
  }

  @media (max-width: 380px) {
    padding: 0 20px;
    grid-gap: 20px;
  }
`;

export const Card = styled.div`
  img {
    width: 100%;
    border-radius: 32px;

    @media (max-width: 380px) {
      width: 340px;
  }
  }
  a {
    text-decoration: none;
    color: black;
  }
  h4 {
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    padding: 16px;

    @media (max-width: 380px) {
      padding: 6px;
  }
  }

`;


export const CuisineTitle = styled.h3`
text-align: center;
  text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
    color: #313131;

    @media (max-width: 460px) {
      font-size: 16px;
    font-weight: 300;
    text-align: center;
   
  }
`