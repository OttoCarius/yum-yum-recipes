import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 48px;
  padding: 0 60px;
`;

export const Card = styled.div`
  img {
    width: 100%;
    border-radius: 32px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  h4 {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    padding: 16px;
  }
`;
