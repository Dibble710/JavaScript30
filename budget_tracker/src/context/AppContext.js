import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    {
      id: 123,
      name: "Shopping",
      cost: 50,
    },
    {
      id: 124,
      name: "Holiday",
      cost: 60,
    },
    {
      id: 126,
      name: "Fishing",
      cost: 500,
    },
    {
      id: 127,
      name: "Gas",
      cost: 20,
    },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
