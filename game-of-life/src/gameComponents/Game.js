import React from 'react'
import Cell from './Cell'
import Universe from '../rules/Universe'
import GameControls from './GameControls'
import HeaderInputs from './HeaderInputs'

class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            universe: new Universe(),
            size: [25, 25],
            startGame: false,
            interval: 100
        }
    }

    handleClear = () => {
        this.setState({
            ...this.state,
            universe: new Universe(),
            startGame: false,
            interval: 100
        }, () => {
            if (this.intervalRef) {
                clearInterval(this.intervalRef)
            }
        })
    }

    handleRowChange = e => {
        if (!this.state.startGame) {
            let actualSize = this.state.size
            if (e.target.value < 100) {
                actualSize[1] = e.target.value
            } else {
                actualSize[1] = 25
            }
            this.setState({
                size: actualSize
            })
            this.renderBoard()
        }
    }

    handleColumnChange = e => {
        if (!this.state.startGame) {
            let actualSize = this.state.size
            if (e.target.value < 100) {
                actualSize[0] = e.target.value
            } else {
                actualSize[0] = 25
            }
            this.setState({
                size: actualSize
            })
            this.renderBoard()
        }
    }

    handleIntervalChange = e => {

        if (!this.state.startGame) {
            this.setState({
                interval: e.target.value
            })
        }
    }

    startGame = () => {
        if (!this.state.startGame) {
            this.setState({
                startGame: true
            }, () => {
                this.intervalRef = setInterval(() => this.runGame(), this.state.interval)
            })
        }
    }

    stopGame = () => {
        this.setState({
            startGame: false
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
        if (!this.state.startGame) {
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

    renderRandomBoard = () => {
        let newWorld = []
        let cellRow = []

        for (let i = 0; i < this.state.size[0]; i++) {
            for (let j = 0; j< this.state.size[1]; j++) {
                let rando = Math.random()
                let position = {x:i, y:j}
                if (rando > 0.6) {
                    this.setState({
                        universe: this.state.universe.storeCell(position)
                    })
                    cellRow.push(<Cell key={[i, j]} position={{x:i, y:j}} live={true} storeCell={this.storeCell}/>)
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
                <HeaderInputs size={this.state.size} interval={this.state.interval} handleRowChange={this.handleRowChange} handleColumnChange={this.handleColumnChange} handleIntervalChange={this.handleIntervalChange}/>
                <GameControls startGame={this.startGame} stopGame={this.stopGame} handleClear={this.handleClear} renderRandomBoard={this.renderRandomBoard}/>
                <h3>Generation: {this.state.universe.getGeneration()}</h3>
              </div>
              <div className="boardContainer">
              {this.renderBoard()}
              </div>
            </div>
          );
    }
}

export default Game