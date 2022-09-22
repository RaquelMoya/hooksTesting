

export const TodoListItem = ({todo, i, onDeleteTodo, onToggleTodo}) => {

    
    return (
        <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between"
        >
            <span
                aria-label='span'
                onClick={() => onToggleTodo(todo.id)}
                className={`align-self-center ${(todo.done)? 'text-decoration-line-through': ''}`
                
            
            }
            >
                {todo.description}
            </span>
            <button
                className="btn btn-danger"
                onClick={() => onDeleteTodo(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}