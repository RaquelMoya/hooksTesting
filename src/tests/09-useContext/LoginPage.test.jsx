import { render, screen, fireEvent } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/userContext";
import { LoginPage } from "../../09-useContext/LoginPage";



describe ('Pruebas en <LoginPage />', () => {

    const wrapper = () => {
        return render(
            <UserContext.Provider value={{ user:null }}>
                <LoginPage />
            </UserContext.Provider>
        )
    }

    test('Debe de mostrarse correctamente', () => {
        wrapper();
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML).toBe('null');
    
    });
    test('Debe de llamar el setUser con el click', () => {
        const setUserMock = jest.fn();
        
        render(
            <UserContext.Provider value={{ user:null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect( setUserMock ).toHaveBeenCalled();
        expect( setUserMock ).toHaveBeenCalledWith({ id: 123, name: 'Juan', email: 'juan@google.com' });
    
    });

});