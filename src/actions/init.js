export const GET_INIT_LIST = 'GET_INIT_LIST'

function initDefault (data) {
  return {
    type: GET_INIT_LIST,
    data: data
  }
}

export function getInvite () {
  return dispatch => {
    let list = []
    dispatch(initDefault(list))
  }
}
