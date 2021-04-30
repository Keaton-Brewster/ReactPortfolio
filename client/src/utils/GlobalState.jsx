import { createContext, useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'show modal':
            return {
                ...state,
                modal: {
                    show: true
                }
            };
        case 'hide modal':
            return {
                ...state,
                modal: {
                    show: false
                }
            };
        case 'form succeeded':
            return {
                ...state,
                formSuccess: true
            }
        case 'form failed':
            return {
                ...state,
                formSuccess: false
            }
        default:
            throw new Error('reducer error in global state');
    }
}

const initialState = {
    modal: {
        show: false
    },
    formSuccess: false
}

function GlobalState({ children }) {
    const [store, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={[store, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export const Context = createContext(initialState)
export default GlobalState;