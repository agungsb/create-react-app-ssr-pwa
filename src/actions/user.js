import { SET, RESET } from '../types/user'
const LOAD = 'LOAD';
const LOAD_SUCCESS = 'LOAD_SUCCESS';
const LOAD_FAIL = 'LOAD_FAIL';

export function tes() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('https://jsonplaceholder.typicode.com/posts/3')
  }
}

export function set(payload){
  return {
    type: SET
  , payload
  }
}

export function reset(){
  return {
    type: RESET
  }
}

