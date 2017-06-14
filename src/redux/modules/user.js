const SET = 'modules/user/SET';
const RESET = 'modules/user/RESET';
const LOAD = 'modules/user/LOAD';
const LOAD_SUCCESS = 'modules/user/LOAD_SUCCESS';
const LOAD_FAIL = 'modules/user/LOAD_FAIL';

const initialState = {
  loaded: false,
  loading: false,
  email: 'user@example.com'
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      }
    case LOAD_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        ...action.result
      }
    case LOAD_FAIL:
      return {
        loaded: true,
        loading: false,
        error: action.error
      }
    case SET:
      return { ...state, ...action.payload }
    case RESET:
      return { ...initialState }
    default:
      return state
  }
}

export function tes() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('https://jsonplaceholder.typicode.com/posts/3')
  }
}

export function set(payload) {
  return {
    type: SET,
    payload
  }
}

export function reset() {
  return {
    type: RESET
  }
}

