import { FILTER, RESET } from "./action"
import { useReducer, createContext } from "react";


export const reducer = (state, action) => {
  switch (action.type) {
    case FILTER:
      const name = action.payload;
      const newArticles = state.articles.filter(art => art.attributes.labels.indexOf(name) !== -1);
      return { ...state, subArt: newArticles };
    case RESET:
      return { ...state, subArt: state.articles };
  }
}

export const ReducerContext = createContext();


export const ReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <ReducerContext.Provider value={
      {
        state,
        dispatch
      }
    }>
      {children}
    </ReducerContext.Provider>
  )
}

