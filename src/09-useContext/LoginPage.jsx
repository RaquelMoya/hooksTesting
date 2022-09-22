import { useContext } from "react"
import { UserContext } from "./context/userContext"



export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);


    console.log( user );

    return (
        <div>
            <h1>LoginPage</h1>
            <hr />

            <pre aria-label="pre">
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button onClick= {() => setUser({ id: 123, name: 'Juan', email: 'juan@google.com'})} className="btn btn-primary">Establecer usuario</button>
        </div>
    )
}