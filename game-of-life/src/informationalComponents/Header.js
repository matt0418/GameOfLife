import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderContainer>
            <StyledTitle>Conway's Game of Life</StyledTitle>
            <StyledLinkContainer>
                <Link to="/">Home</Link>
                <Link to ="/game">Game</Link>
            </StyledLinkContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledTitle = styled.h1`
    font-size: 56px;
    margin-left: 2.5%;
`
const StyledLinkContainer = styled.div`
    font-size: 22px;
    width: 250px;
    padding-right: 30px;
    display: flex;
    justify-content: space-evenly;
`

export default Header