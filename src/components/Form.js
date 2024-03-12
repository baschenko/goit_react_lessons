import { Component } from "react";


class Form extends Component {
  state = {
    name: '',
    tag: '',
  };

  handleChange = e => {
    const { name, value } =
      e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

    
  handleSbmit = e => {
    e.preventDefault();
      console.log(this.state);
      this.props.onSubmit(this.state);
      this.reset();
    };

    reset = () => {
        this.setState({name:'', tag:''})
    }
    

  render() {
    return (
      <form onSubmit={this.handleSbmit}>
        <label htmlFor="">
          Имя{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Прозвище{' '}
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">
          Отправить
        </button>
      </form>
    );
  }
}

export default Form;