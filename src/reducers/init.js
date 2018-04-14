import {
  GET_INIT_LIST
} from 'Actions/init'

function initReducer (state = {
  list : []
}, action) {
  switch (action.type) {
    case GET_INIT_LIST:
      return Object.assign({}, state, {
        list: action.data
      })
    default:
      return state
  }
}

export default initReducer
