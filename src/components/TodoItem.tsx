import "./TodoItem.css";

type TodoItemProps = {
    index: number;
    todo: string;
    handleDelete: (index: number) => void
}

const TodoItem = (props: TodoItemProps) => {
    const { todo, index, handleDelete } = props;

    return (
        <div className="todo-item">
            <div>{todo}</div>
            <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
    );
}

export default TodoItem;