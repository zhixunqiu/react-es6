import Immutable, { List, Map } from 'immutable'
import {
  GET_INIT_LIST
} from 'Actions/init'

const initialState = Immutable.fromJS({
    list : []
})

function initReducer (state = initialState, action) {
  switch (action.type) {
    case GET_INIT_LIST:
      return Immutable.merge(state,Map({
        list: action.data
      }))
    default:
      return state
  }
}

export default initReducer
