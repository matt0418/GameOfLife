import React from 'react'

const GameControls = props => {
    return (
        <div className="headerButtons">
            <button className="submit" onClick={props.startGame}>Start</button>
            <button className="submit" onClick={props.stopGame}>Stop</button>
            <button className="submit" onClick={props.handleClear}>Clear</button>
            <button className="submit" onClick={props.renderRandomBoard}>Random</button>
        </div>
    )
}

export default GameControls