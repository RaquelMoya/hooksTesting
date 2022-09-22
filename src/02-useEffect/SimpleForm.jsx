import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Raquel',
        email: 'raquel@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        console.log('hey');
    }, []);
    useEffect(() => {
        console.log('formState changed');
    }, [formState]);
    useEffect(() => {
        console.log('email changed');
    }, [email]);



    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input type="text" className="form-control" placeholder="Username" name="username" value= {username} onChange= {onInputChange}/>
            <input type="email" className="form-control" placeholder="raquel@google.com" name="email" value= {email} onChange= {onInputChange}/>

            {
                username === 'Raquel' && <Message />
            }
        </>

    )
}
