import React, { useReducer, useEffect } from 'react';
import Grid from './components/Grid'
import './App.css';


const App = () => {
  let speed = 100
  let rows = 50
  let cols = 30

  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState}),
    {
      generations: 0,
      rate: 100,
      rows: 50,
      cols: 30,
      full: Array(rows).fill().map(() => Array(cols).fill(false))
    }
  )

  const selectBox = (row, col) => {
    let gridCopy = arrayClone(state.full)
    gridCopy[row][col] = !gridCopy[row][col]
    setState({
      full: gridCopy
    })
  }

  function randomize() {
    let gridCopy = arrayClone(state.full)
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }
    setState({
      full: gridCopy
    })
  }

  useEffect(() => {
    console.log('runnign')
    randomize()
  }, [])




  return (
    <div className="App">
      <Grid 
        full={state.full}
        rows={rows}
        cols={cols}
        selectBox = {selectBox}
      />
      <h3>Generations: {state.generations}</h3>
    </div>
  );
}

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr))
}

export default App;
