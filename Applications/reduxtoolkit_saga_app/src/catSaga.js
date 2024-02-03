import { getCatsSuccess } from "./catSate";

import {call,put,takeEvery} from 'redux-saga/effects';

function* workerCatsFetch(){
  const cats = yield call( ()=> fetch('https://api.thecatapi.com/v1/breeds'))
  const formattedCats = yield cats.json();
  const formattedCatsShortened = formattedCats.slice(0,10);
  yield put(getCatsSuccess(formattedCatsShortened));

}

function* catSaga(){
    yield takeEvery('cats/getCatsFetch',workerCatsFetch);
}

export default catSaga;