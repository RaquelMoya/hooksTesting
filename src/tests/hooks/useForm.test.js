import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../hooks/useForm';


describe ('Pruebas en useForm', () => {
    
        const initialForm = {
            name: 'Fernando',
            email: 'fernando@google.com'
        }

        test('debe de regresar un formulario por defecto', () => {
                
                const { result } = renderHook( () => useForm(initialForm) );
                const { onInputChange, onResetForm } = result.current;

                expect( onInputChange ).toEqual(expect.any(Function));
                expect( onResetForm ).toEqual(expect.any(Function));
            })

        test('debe de cambiar el valor del formulario (cambiar name)', () => {
                  
                const { result } = renderHook( () => useForm(initialForm) );
                const { onInputChange }= result.current;
    
                act( () => {
                    onInputChange({
                        target: {
                            name: 'name',
                            value: 'Melissa'
                        }
                    });
                });
    
                expect( result.current.formState.name ).toBe( 'Melissa' );
                })

        test('debe de re-establecer el formulario con RESET', () => {
                        
                 const { result } = renderHook( () => useForm(initialForm) );
                 const  { onInputChange, onResetForm }  = result.current;
    
                 act( () => {
                     onInputChange({
                         target: {
                             name: 'name',
                             value: 'Melissa'
                         }
                     });
                     onResetForm();
                 });
    
                 expect( result.current.formState.name ).toBe( initialForm.name );
             })
    })