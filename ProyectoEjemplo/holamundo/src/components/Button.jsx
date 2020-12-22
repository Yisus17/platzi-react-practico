import React from "react";

class Button extends React.Component {
  state = {
    count: 0,
  };

  handleClickAddApples = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleClickClean = () => {
    this.setState({
      count: 0,
    });
  };

  handleClickDeleteApples = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }else{
      alert("La canasta esta vacia!");
    }
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Manzanas: {count}</h1>
        <button type="button" onClick={this.handleClickAddApples}>
          Agregar
        </button>

        <button type="button" onClick={this.handleClickDeleteApples}>
          Quitar
        </button>

        <button type="button" onClick={this.handleClickClean}>
          Vaciar canasta
        </button>
      </div>
    );
  }
}

export default Button;
