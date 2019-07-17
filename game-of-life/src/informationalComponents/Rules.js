import React from 'react'
import styled from 'styled-components'

const Rules = () => {
    return (
        <RuleContainer>
            <RuleHeader>Game Rules</RuleHeader>
            <RuleList>
                <li>If a cell is <strong>alive</strong> and has exactly 2 or 3 neighbors, it <strong>stays</strong> alive</li>
                <li>If a cell is <strong>alive</strong> and has less than 2 or more the 4 neighbors, it <strong>dies</strong></li>
                <li>If a cell is <strong>dead</strong> and has exactly 3 neighbors, it <strong>come to life</strong></li>
            </RuleList>
        </RuleContainer>
    )
}

const RuleContainer = styled.div`
    border: 2px solid black;
    background-color: white;
    width: 75%;
    margin-left: 12.5%;
    margin-top: 55px;
    padding-bottom: 30px;
    box-shadow: -2px -2px;
`

const RuleHeader = styled.h2`
    font-size: 35px;
    margin-top: 4%;
    text-align: center;
`
const RuleList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default Rules