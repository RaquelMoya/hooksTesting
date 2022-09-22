import { useForm } from "../hooks"


export const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChange, onResetForm } = useForm({
        description: ''
    });
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }
        onNewTodo(newTodo);
        onResetForm();
    }

    return(
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Aprender..."
                autoComplete="off"
                value={description}
                onChange={onInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1 btn-block"
                onClick={onFormSubmit}
            >
                Agregar
            </button>

        </form>
    )
}