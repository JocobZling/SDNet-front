//action types
export const types = {
  START_FETCH: 'app/START_FETCH',
  FINISH_FETCH: 'app/FINISH_FETCH',
  SET_ERROR: 'app/SET_ERROR',
  TOGGLE_MOBILE_MENU: 'app/TOGGLE_MOBILE_MENU',
  LOGIN_DIALOG: 'app/LOGIN_DIALOG',
}

//action creators
export const actions = {
  startFetch: () => {
    return {type: types.START_FETCH}
  },
  finishFetch: () => {
    return {type: types.FINISH_FETCH}
  },
  setError: (error) => {
    return {type: types.SET_ERROR, payload: error}
  },
  toggleMobileMenu: () => {
    return {type: types.TOGGLE_MOBILE_MENU}
  },
  loginDialog: (flag) => {
    return {type: types.LOGIN_DIALOG, payload: flag}
  }
}

const initialState = {
  isFetching: false,
  error: null,
  isMobileMenuOpen: false,
  isLoginDialogShow: false
}

// reducer
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case types.START_FETCH:
      return {...state, isFetching: true}
    case types.FINISH_FETCH:
      return {...state, isFetching: false}
    case types.SET_ERROR:
      return {...state, error: action.payload}
    case types.TOGGLE_MOBILE_MENU:
      return {...state, isMobileMenuOpen: !state.isMobileMenuOpen}
    case types.LOGIN_DIALOG:
      return {...state, isLoginDialogShow: action.payload}
    default:
      return state
  }
}
