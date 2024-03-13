import ColorPicker from 'components/ColorPicker';
// import Counter from 'components/Counter';
// import Dropdown from 'components/Dropdown';
// import TodoList from 'components/TodoList';
import React, { Component } from 'react';
import initialTodos from '../../todos.json';
import Container from 'components/Container';
import Form from 'components/Form';

const colorPickerOption = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D86' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },

];

class App extends Component {
  state = {
    todos: initialTodos,
 
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data)
  }


  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // }
  
  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // }

  render() {
    // const { todos } = this.state;
    
    // const coplitedTodosCount = todos.reduce((acc, todo) => (todo.complited ? acc+1: acc), 0);
    return (
      <Container>
        <Form onSubmit={ this.formSubmitHandler} />
        {/* <form onSubmit={this.handleSbmit}>
          <label htmlFor="">
          Имя <input type="text" name='name' value={ this.state.name} onChange={this.handleChange}/>
          </label>
          <label>
          Прозвище <input type='text' name='tag' value={this.state.tag}  onChange={this.handleChange}/>
          </label>
          <button type="submit">Отправить</button>
        </form> */}
      <ColorPicker options={colorPickerOption} />
        </Container>
      // <>
      //   <h1>Состояние компонента</h1>
      //   <Counter />
      //   <Dropdown/>
      //    <div>
      //      <p>
      //        Общее кол-во Todo: {todos.length};
      //      </p>
      //      <p>
      //        Кол-во выполненых: {coplitedTodosCount};
      //      </p>
      //    </div>
      //    <TodoList
      //      todos={todos}
      //      onDeleteTodo={this.deleteTodo}
      //    />
      //  </>
    );
  }
}


export default App;
