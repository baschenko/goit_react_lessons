import React from 'react';
import Controls from './Controls';
import { Value } from './Value';



class Counter extends React.Component {
static defaultProps = {
    initialValue: 0,
}

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // чтоб просто перезаписать
    // this.setState({
    //     value: 10,
    // });

    // Если нужно от предыдущего состояния чтото сделать
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

    handleDecrement = () => {
       this.setState(prevState => ({
         value: prevState.value - 1,
       }));
  };

  render() {
    return (
      <div className="Counter">
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
