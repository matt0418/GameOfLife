import React from 'react'

const Cell = props => {
    return (
        <div onClick={() => props.storeCell(props.position)} className={props.live ? "cellContainerLive" : "cellContainerDead"}></div>
    );
}

export default Cell