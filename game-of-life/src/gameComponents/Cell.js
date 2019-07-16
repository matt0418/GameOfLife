import React from 'react'

class Cell extends React.Component {
    render() {
      return (
        <div onClick={() => this.props.storeCell(this.props.position)} className={this.props.live ? "cellContainerLive" : "cellContainerDead"}></div>
      );
    }
}

export default Cell