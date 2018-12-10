import * as types from './types.jsx'

export const getUserByLocation = () => dispatch => {
  dispatch ({
    type: types.GET_USERS_BY_LOCATION,
    payload: 'Brastlewark',
  })
}

export const getData = () => dispatch => {
  dispatch ({
    type: types.GET_DATA
  })
}
