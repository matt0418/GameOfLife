import React from 'react'
import Cell from './Cell'
import Universe from '../rules/Universe'

class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            universe: new Universe(),
            size: [50, 30],
            gameRunning: false,
            interval: 100
        }
    }

    handleClear = () => {
        this.setState({
            ...this.state,
            universe: new Universe(),
            gameRunning: false,
            interval: 100
        }, () => {
            if (this.intervalRef) {
                clearInterval(this.intervalRef)
            }
        })
    }

    handleRowChange = e => {
        if (!this.state.gameRunning) {
            let actualSize = this.state.size
            if (e.target.value < 100) {
                actualSize[1] = e.target.value
            } else {
                actualSize[1] = 30
            }
            this.setState({
                size: actualSize
            })
            this.renderBoard()
        }
    }

    handleColumnChange = e => {
        if (!this.state.gameRunning) {
            let actualSize = this.state.size
            if (e.target.value < 100) {
                actualSize[0] = e.target.value
            } else {
                actualSize[0] = 50
            }
            this.setState({
                size: actualSize
            })
            this.renderBoard()
        }
    }

    startGame = () => {
        if (!this.state.gameRunning) {
            this.setState({
                gameRunning: true
            }, () => {
                this.intervalRef = setInterval(() => this.runGame(), this.state.interval)
            })
        }
    }

    stopGame = () => {
        this.setState({
            gameRunning: false
        }, () => {
            if (this.intervalRef) {
                clearInterval(this.intervalRef)
            }
        })

    }

    runGame = () => {
        this.setState({
            universe: this.state.universe.addGeneration()
        })
    }

    storeCell = position => {
        if (!this.state.gameRunning) {
            this.setState({
                universe: this.state.universe.storeCell(position)
            })
        }
    }

    renderBoard = () => {
        let newWorld = []
        let cellRow = []

        for (let i = 0; i < this.state.size[0]; i++) {
            for (let j = 0; j< this.state.size[1]; j++) {
                if (this.state.universe.isCellAlive(i+" , "+j)) {
                    cellRow.push(<Cell key={[i, j]} position={{x:i, y:j}} live={true} storeCell={this.storeCell}/>)
                } else {
                    cellRow.push(<Cell key={[i, j]} position={{x:i, y:j}} live={false} storeCell={this.storeCell}/>)
                }
                
            }
            newWorld.push(<div className="row" key={i}>{cellRow}</div>)
            cellRow=[]
        }
        return newWorld
    }

    render() {
        console.log(this.state.universe)
        return (
            <div className="worldContainer">
              <div className="headerContainer">
                <div className="headerInnerContainer">
                  <label className="label">
                    Rows:
                    <input className="input" type="text" value={this.state.size[1]} onChange={this.handleRowChange} />
                  </label>
                  <label className="label">
                    Columns:
                    <input className="input" type="text" value={this.state.size[0]} onChange={this.handleColumnChange} />
                  </label>
                </div>
                <div className="headerButtons">
                  <button className="submit" onClick={this.startGame}>Start</button>
                  <button className="submit" onClick={this.stopGame}>Stop</button>
                  <button className="submit" onClick={this.handleClear}>Clear</button>
                </div>
                Generation: {this.state.universe.getGeneration()}
              </div>
              <div className="boardContainer">
              {this.renderBoard()}
              </div>
            </div>
          );
    }
}

export default Game