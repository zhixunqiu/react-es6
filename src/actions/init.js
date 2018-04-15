import Immutable from 'immutable'
export const GET_INIT_LIST = 'GET_INIT_LIST'

function initDefault (list) {
  return {
    type: GET_INIT_LIST,
    data: list
  }
}

export function getInvite () {
  return dispatch => {
    let dataArr = []
        for(let i = 0; i < 20; i++){
            let checked = Math.random() < 0.5
            dataArr.push({
                name: i,
                checked
            })
        }
     const list =  Immutable.fromJS(dataArr) 
     dispatch(initDefault(list))
  }
}
