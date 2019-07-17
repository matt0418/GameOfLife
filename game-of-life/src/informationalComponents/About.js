import React from 'react'
import styled from 'styled-components'

const About = () => {
    return (
        <AboutContainer>
            <StyledAbout>About this Algorithm...</StyledAbout>
            <StyledPar>The Game of Life is a cellular automaton invented by John Horton Conway in 1970</StyledPar>
            <StyledPar>It is a zero-player game, where after an initial state is given it can continue on without any further interaction</StyledPar>
            <StyledPar>The game is Turing Complete, this means that it can simulate a Turing Machine so that it can be used to complete any algorithm which can be calculated</StyledPar>
        </AboutContainer>
    )
}

const AboutContainer = styled.div`
    margin-top: 50px;
    border: 1px solid black;
    width: 75%;
    margin-left: 12.5%;
    background: white;
    box-shadow: -2px -2px;
    padding-bottom: 30px;
`
const StyledAbout = styled.h3`
    font-size: 30px;
    text-align: center;
`
const StyledPar = styled.p`
    width: 80%;
    text-align: center;
    margin-left: 10%;
`

export default About



