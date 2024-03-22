// import IconButton from 'components/IconButton';
// import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

const Todo = ({
  text,
  onToggleCompleted,
  onDeleteTodo,
  completed,
}) => (
  <>
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className="TodoList__text">{text}</p>
    {/* <IconButton onClick={onDeleteTodo}>
      <DeleteIcon width="32" fill="#fff" />
    </IconButton> */}
    <button
        type="button"
        className="TodoList__btn"
        onClick={onDeleteTodo}
      >
        Del
      </button>
  </>
);

export default Todo;
