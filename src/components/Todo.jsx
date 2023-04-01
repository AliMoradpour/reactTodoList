const Todo = ({ todo, onComplete, onDelete }) => {
  return (
    <div className="todo">
      <div className={todo.isCompleted ? "completed" : ""} onClick={onComplete}>
        {todo.text}
      </div>
      <div>
        <button>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
