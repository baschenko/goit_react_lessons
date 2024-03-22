import React from 'react';
import './TodoList.scss';
import classNames from 'classnames';
import Todo from 'components/Todo/Todo';

const TodoList = ({
  todos,
  onDeleteTodo,
  onToggleCompleted,
}) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <Todo
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDeleteTodo={() => onDeleteTodo(id)}
          text={text}
        />
  
      </li>
    ))}
  </ul>
);

export default TodoList; 