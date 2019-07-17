import React from 'react'
import styled from 'styled-components'

const About = () => {
    return (
        <AboutContainer>
            <h3>About this Algorithm...</h3>
            <p>The Game of Life is a cellular automaton invented by John Horton Conway in 1970</p>
            <p>It is a zero-player game, where after an initial state is given it can continue on without any further interaction</p>
            <p>The game is Turing Complete, this means that it can simulate a Turing Machine so that it can be used to complete any algorithm which can be calculated</p>
        </AboutContainer>
    )
}

const AboutContainer = styled.div`
    margin-top: 50px;
    border: 1px solid black;
    width: 75%;
    margin-left: 12.5%;
`

export default About



