// import ColorPicker from 'components/ColorPicker';
// import Counter from 'components/Counter';
// import Dropdown from 'components/Dropdown';
import TodoList from 'components/TodoList';
import React, { Component } from 'react';
import initialTodos from '../../todos.json';
import Container from 'components/Container';
import TodoEditor from 'components/TodoEditor';
import shortid from 'shortid';
import Filter from 'components/Filter';
// import Form from 'components/Form';

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
    filter: '',
  };

  addTodo = text => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(({ todos }) =>({
      todos: [todo, ...todos]
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(
        todo => todo.id !== todoId,
      ),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('Нашли то туду который  нужно!');
    //       return {
    //         ...todo, completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   })
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilte = e => { 
    this.setState({filter: e.currentTarget.value});
  };


  getVisibleTodos = () => {
   const { filter, todos } = this.state;
   
    const normalizedFilter =  filter.toLowerCase();
    
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };


  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return (
      todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    )
    );
  }

  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // }

  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // }

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const coplitedTodosCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();



    return (
      <Container>
        {/* <Form onSubmit={ this.formSubmitHandler} /> */}
        {/* <form onSubmit={this.handleSbmit}>
          <label htmlFor="">
          Имя <input type="text" name='name' value={ this.state.name} onChange={this.handleChange}/>
          </label>
          <label>
          Прозвище <input type='text' name='tag' value={this.state.tag}  onChange={this.handleChange}/>
          </label>
          <button type="submit">Отправить</button>
        </form> */}
        {/* <ColorPicker options={colorPickerOption} /> */}
        <div>
          <p>Общее кол-во Todo: {totalTodoCount};</p>
          <p>Кол-во выполненых: {coplitedTodosCount};</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <Filter
          value={filter}
          onChange={this.changeFilte}
        />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
      // <>
      //   <h1>Состояние компонента</h1>
      //   <Counter />
      //   <Dropdown/>
      //  </>
    );
  }
}

export default App;
