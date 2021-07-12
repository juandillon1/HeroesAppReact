import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas en auth reducer', () => {
    test('Debe retornar el estado por defecto', () => {
        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged: false});
    });

    test('Debe autenticar y colocar el nombre de usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Juan'
            }
        }
        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            logged: true,
            name: 'Juan'
        });

    });

    test('Debe borrar el usuario y logged en false', () => {
        const action = {
            type: types.logout,
            payload: {}
        }
        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            logged: false
        });

    });
})
