const initialState = {
  isFetching: false,
  error: null,
  name: null,
  github: null,
  reddit: null,
}

const username = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.username,
        data: initialState.data,
      }
    case 'LOOKUP_START':
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case 'LOOKUP_SUCCESS':
      return {
        ...state,
        [action.prop]: action.data,
        isFetching: false,
      }
    case 'LOOKUP_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default username
