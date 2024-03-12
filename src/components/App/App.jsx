// import Counter from 'components/Counter';
// import ColorPicker from 'components/ColorPicker';
// import Dropdown from 'components/Dropdown';
import TodoList from 'components/TodoList';
import React, { Component } from 'react';
import initialTodos from '../../todos.json';

// const colorPickerOption = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D86' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },

// ];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };



  render() {
    const { todos } = this.state;
    
    const coplitedTodosCount = todos.reduce((acc, todo) => (todo.complited ? acc+1: acc), 0);
    return (
      <>
        <h1>Состояние компонента</h1>
        {/* <Counter /> */}
        {/* <Dropdown/> */}
        {/* <ColorPicker options={colorPickerOption} /> */}
        <div>
          <p>
            Общее кол-во Todo: {todos.length};
          </p>
          <p>
            Кол-во выполненых: {coplitedTodosCount};
          </p>
        </div>
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
        />
      </>
    );
  }
}


export default App;
