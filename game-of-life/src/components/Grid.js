import React, { useReducer } from 'react'

const Box = props => {
    const selectBox = () => {
        props.selectBox(props.row, props.col)
    }
    return (
        <div
            className={props.boxClass}
            id={props.id}
            onClick={selectBox}
        >
         
        </div>
    )
}

const Grid = props => {
    console.log(props)
    const width = props.rows * 16 
    let rowArr = []
    let boxClass = "";
    for (let i = 0; i < props.rows; i++) {
        for (let j=0; j < props.cols; j++) {
            let boxId = i + '_' + j
            boxClass = props.full[i][j] ? 'box on': 'box off'
            rowArr.push(
                <Box
                    boxClass={boxClass}
                    key={boxId}
                    row={i}
                    col={j}
                    selectBox={props.selectBox}

                />
            )
        }
    }
    return (
        <div className='grid' style={{width: width}}>
            {rowArr}
        </div>
    )
}

export default Grid