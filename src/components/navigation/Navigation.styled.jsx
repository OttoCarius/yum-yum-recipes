import styled from "styled-components";
import { Link } from "react-router-dom";


export const Nav = styled.div`
    padding: 50px 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
     padding: 30px 0;
  }
    svg{
        font-size: 32px;
    }
    h2{
        font-size: 18px;
    }
    `

export const Logo = styled(Link)`
    text-decoration: none;
    font-size: 24px;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
    color: #313131;
`


