import React from 'react'
import { Outlet } from 'react-router-dom';
import { MainContainer, Main } from './Layout.styled';
import Category from "../category/Category";
import Search from "../search/Search";
import Navigation from "../navigation/Navigation";

function Layout() {
  return (
    <MainContainer>
    <Navigation />
    <Search/>
    <Category/>
    <Main>
      <Outlet />
    </Main>
  </MainContainer>
  )
}

export default Layout
