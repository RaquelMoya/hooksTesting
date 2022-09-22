import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-Reducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

const initialState = [];

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        dispatch({
            type: 'add',
            payload: todo
        });
    }

    const handleDeleteTodo = (todoId) => {
        dispatch({
            type: 'delete',
            payload: todoId
        });
    }

    const handleToggleTodo = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });

    }
    return (
        {   todos,
            todosCount: todos.length,
            todosPending: todos.filter( todo => !todo.done).length,
            handleNewTodo,
            handleDeleteTodo,
            handleToggleTodo
        }
    );
}
