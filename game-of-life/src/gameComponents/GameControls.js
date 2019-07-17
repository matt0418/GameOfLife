import React from 'react'
import styled from 'styled-components'

const GameControls = props => {
    return (
        <ButtonContainer>
            <SubmitButton onClick={props.startGame}>Start</SubmitButton>
            <SubmitButton onClick={props.stopGame}>Stop</SubmitButton>
            <SubmitButton onClick={props.handleClear}>Clear</SubmitButton>
            <SubmitButton onClick={props.renderRandomBoard}>Random</SubmitButton>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    display: flex;
    justify-contents: space-between;
    width: 20%;
    padding: 0 20px 20px;
`

const SubmitButton = styled.button`
    width: 50%;
    margin: 5px;
`

export default GameControls