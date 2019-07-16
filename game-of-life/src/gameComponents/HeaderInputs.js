import React from 'react'

const HeaderInputs = props => {
    return (
        <div className="headerInnerContainer">
            <label className="label">
                Rows:
                <input className="input" type="text" value={props.size[1]} onChange={props.handleRowChange} />
            </label>
            <label className="label">
                Columns:
                <input className="input" type="text" value={props.size[0]} onChange={props.handleColumnChange} />
            </label>
            <label className="label">
                Speed:
                <input className="input" type="number" value={props.interval} onChange={props.handleIntervalChange} />
            </label>
        </div>
    )
}

export default HeaderInputs