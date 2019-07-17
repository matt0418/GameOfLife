import React from 'react'
import styled from 'styled-components'

const HeaderInputs = props => {
    return (
        <HeaderContainer>
            <Label>
                Rows:
                <Inputs className="input" type="text" value={props.size[1]} onChange={props.handleRowChange} />
            </Label>
            <Label>
                Columns:
                <Inputs className="input" type="text" value={props.size[0]} onChange={props.handleColumnChange} />
            </Label>
            <Label>
                Speed:
                <Inputs className="input" type="number" value={props.interval} onChange={props.handleIntervalChange} />
            </Label>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    text-align: center;
`
const Label = styled.label`
    display: flex;
    margin-bottom: 16px;
    margin-right: 10px;
`
const Inputs = styled.input`
    margin-left: 5px;
`

export default HeaderInputs