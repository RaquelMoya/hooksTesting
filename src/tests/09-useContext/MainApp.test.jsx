import { MainApp } from "../../09-useContext/MainApp";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe ('Pruebas en <MainApp />', () => { 

    test('Debe de mostrarse correctamente HomePage', () => {
        render(
            <MemoryRouter>        
               <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('HomePage')).toBeTruthy();
    });
    test('Debe de mostrarse correctamente LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>        
               <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('LoginPage')).toBeTruthy();
    });
    test('Debe de mostrarse correctamente AboutPage', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>        
               <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('AboutPage')).toBeTruthy();
    });
});