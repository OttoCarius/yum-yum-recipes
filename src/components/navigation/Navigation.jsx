import React from 'react'
import {Nav, Logo} from './Navigation.styled'
import {GiKnifeFork} from 'react-icons/gi'

function Navigation() {
  return (
    <>
      <Nav>
        <GiKnifeFork/>
        <Logo to={'/'}>Yum-yum Recipes</Logo>
      </Nav>
    </>
  )
}

export default Navigation
