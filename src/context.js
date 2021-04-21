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
 firstName: '',
 lastName: '',
 dob: '',
 isValid1: false
}

export const AppProvider = ({ children }) => {
 const [state, dispatch] = useReducer(reducer, initialState)

 const getName = ({firstName, lastName,dob}) => {
  //  console.log({firstName,lastName,dob});
    dispatch({ type: 'GET_FIRST_FORM', payload: {firstName,lastName,dob} })
   }

 const saveOnServer = useCallback(() => {
 console.log('_______________________________________SAve on Server_______________________________________');
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
