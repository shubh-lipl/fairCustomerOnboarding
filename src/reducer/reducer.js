export const reducer = (state, action) => {
  if (action.type === 'GET_NAME') {
    const {firstName} = {...action.payload}
    return {
      ...state,
      firstName: firstName
    }
  }

  return state;
}