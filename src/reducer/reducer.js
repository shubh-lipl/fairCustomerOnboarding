export const reducer = (state, action) => {
  if (action.type === 'GET_FIRST_FORM') {
    console.log(state);
    const {firstName, lastName, dob} = {...action.payload}
    let flagValidation = false;
    if (firstName !== '' && lastName !== '' && dob !== '') {
      flagValidation = true;
    }
    return {
      ...state,
      firstName: firstName,
      lastName:lastName,
      dob: dob,
      isValid1: flagValidation
    }
  }

  return state;
}