import { takeEvery, put } from 'redux-saga/effects'

function getAsyncData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(3)
    }, 2000)
  })
}

function* getData(action) {
  let result = yield getAsyncData()
  yield put({
    type: 'decrement',
    data: result
  })
}

function* mySaga() {
  yield takeEvery('saga_decrement', getData)
}

export default mySaga