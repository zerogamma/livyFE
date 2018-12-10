export default (state = {} , action) => {
  switch (action.type) {
    case 'GET_USERS_BY_LOCATION':
      return action.payload;
    case 'LOAD_MAIN_STATE':
      return action.payload;
    default:
      return state;
  }
}
