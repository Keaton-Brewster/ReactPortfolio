import { createContext, useReducer } from "react";

function reducer(state, { type }) {
  switch (type) {
    case "SHOW_MODAL":
      return {
        ...state,
        modal: {
          show: true,
        },
      };
    case "HIDE_MODAL":
      return {
        modal: {
          ...state,
          show: false,
        },
      };
    case "FORM_SUCCESS":
      return {
        ...state,
        formSuccess: true,
      };
    case "FORM_FAILURE":
      return {
        ...state,
        formSuccess: false,
      };
    case "START_LOADING":
      return { ...state, loading: true };
    case "FINISHED_LOADING":
      return { ...state, loading: false };
    default:
      throw new Error("reducer error in global state");
  }
}

const initialState = {
  modal: {
    show: false,
  },
  formSuccess: false,
  loading: true,
};

function GlobalState({ children }) {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[store, dispatch]}>{children}</Context.Provider>
  );
}

export const Context = createContext(initialState);
export default GlobalState;
