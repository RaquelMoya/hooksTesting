import { useRef } from 'react';


export const FocusScreen = () => {

    const inputRef = useRef();

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Su nombre"
            />
            <button
                className="btn btn-outline-primary mt-5"
                onClick={ () => {
                    inputRef.current.select();
                }}

            >
                Set Focus
            </button>
        </>
    )
}