import React from 'react'
import styled from 'styled-components'

const Cell = props => {
    if (props.live) {
        return <LiveCell onClick={() => props.storeCell(props.position)}></LiveCell>
    } else {
        return <DeadCell onClick={() => props.storeCell(props.position)}></DeadCell>
    }
}

export default Cell

const DeadCell = styled.div`
    display: flex;
    padding: 10px;
    margin: 1px;
    border: 1px solid black;
    background: #393D44;
    &:hover {
        background-color: #B0B0B0
    }
`

const LiveCell = styled.div`
    display: flex;
    padding: 10px;
    margin: 1px;
    border: 1px solid black;
    background: #8BC2F5;
    &:hover {
        background-color: #8BC2F5
    }
`