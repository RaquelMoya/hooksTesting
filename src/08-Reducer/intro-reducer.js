

const initialState = [{ 
    id:1,
    description: 'Recolectar la piedra del Alma',
    done: false
 }];

function reducer(state = initialState, action = {}) {
    if (action?.type === 'add') {
        return [...state, action.payload];
    }
    return state;
}
    
let todos = reducer ();

const newTodo = {
    id:2,
    description: 'Recolectar la piedra del Poder',
    done: false
};

const addTodoAction = {
    type: 'add',
    payload: newTodo
};

todos = reducer(todos, addTodoAction);

console.log({state: todos});