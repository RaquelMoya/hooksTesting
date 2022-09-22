import { render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/userContext";
import { HomePage } from "../../09-useContext/HomePage";

describe ('Pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Fernando'
    }


        test ('debe de mostrarse correctamente', () => {
            render( <UserContext.Provider value={{ user: null }} >
                        <HomePage />
                    </UserContext.Provider> 
                    );

            const preTag = screen.getByLabelText('pre');
            expect ( preTag.innerHTML).toBe('null');
        });
        test ('debe de mostrarse correctamente CON el usuario', () => {
            render( <UserContext.Provider value={{ user }} >
                        <HomePage />
                    </UserContext.Provider> 
                    );

            const preTag = screen.getByLabelText('pre');
            expect ( preTag.innerHTML).toContain(user.name);
            expect ( preTag.innerHTML).toContain(user.id.toString());
        });
    });

