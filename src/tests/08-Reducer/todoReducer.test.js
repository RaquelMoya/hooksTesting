import { todoReducer } from "../../08-Reducer/todoReducer";



describe('Pruebas en todoReducer', () => {

    const demoTodos = [{
        id: 1,
        desc: 'Aprender React',
        done: false
    },
    {
        id: 2,
        desc: 'Aprender Mongo',
        done: false
    }];

    test('Debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('Debe de agregar un TODO', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Express',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        const state = todoReducer(demoTodos, action);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('Debe de borrar un TODO', () => {
        const action = {
            type: 'delete',
            payload: 1
        };

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);
    });

    test('Debe de hacer el TOGGLE del TODO', () => {
        const action = {
            type: 'toggle',
            payload: 1
        };

        const state = todoReducer(demoTodos, action);
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);
    });

});