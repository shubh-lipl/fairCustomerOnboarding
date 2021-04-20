import { createContext, useContext, useEffect, useReducer, useCallback } from 'react'
import { reducer } from './reducer/reducer'

const AppContext = createContext()

const getLocalStorage = () => {
 if (JSON.parse(localStorage.getItem('recipe'))) {
  return JSON.parse(localStorage.getItem('recipe'))
 }
 return []
}

let initialState = {
 firstName: ''
}

export const AppProvider = ({ children }) => {
 const [state, dispatch] = useReducer(reducer, initialState)

 const getName = (name) => {
    dispatch({ type: 'GET_NAME', payload: {firstName: name} })
   }

 const saveOnServer = useCallback(() => {
 console.log('SAve on server>>>>>>>>>>>>>>>>>>>>>>>>>');
 }, [state])

 useEffect(() => {
  saveOnServer()
 }, [state, saveOnServer])

 return (
  <AppContext.Provider value={{
   ...state,
   getName
  }}>
   {children}
  </AppContext.Provider>
 )
}

export const useGlobalContext = () => {
 return useContext(AppContext);
}
