//contains sagas / generator functions to manage the actions effectively & in async mode

import { put, takeLatest, all } from 'redux-saga/effects'; //import system defined api
//put: Function that instructs the middleware to schedule the dispatching of an action to the store
//takeLatest: if you dispatch the action before the previous API finishes, it stops that call and returns only the latest one
//all : instructs the middleware to run multiple watch saga functions  in parallel and wait for all of them to complete

function* fetchNews() { //Generator function with *. //Worker Sagar: This function is called by the Watcher Saga
  const data = yield fetch('http://localhost:6700/foods') //yield: pauses the function and retuns a notification once REST API "Get" call is generated
                                                             //async functions retun Promise --> has multiple retun values (data,notification or error)
        .then(response => response.json(), );    
  yield put({ type: "FOODS_RECEIVED", json: data, }); /*yield: pauses the function & retuns a value once data arrives from 
                                                                  REST Service 
                                                           put  : Triggers a "FOODS_RECEIVED" custom action to the store. 
                                                                  Reducer in '/reducers/index.js' handles this action and sends 
                                                                  out a notification once the data is retreived from the REST API */
}
function* fetchFoodId(action) { //Generator function with *. //Worker Sagar: This function is called by the Watcher Saga
  const data = yield fetch('http://localhost:6700/foods',action.payload.ID) //yield: pauses the function and retuns a notification once REST API "Get" call is generated
                                                             //async functions retun Promise --> has multiple retun values (data,notification or error)
        .then(response => response.json(), );    
  yield put({ type: "FOOD_RECEIVED_ID", json: data, }); /*yield: pauses the function & retuns a value once data arrives from 
                                                                  REST Service 
                                                           put  : Triggers a "FOODS_RECEIVED" custom action to the store. 
                                                                  Reducer in '/reducers/index.js' handles this action and sends 
                                                                  out a notification once the data is retreived from the REST API */
}

function* actionWatcher() {//Generator function with *.  //Watcher Saga: 
     yield takeLatest('GET_FOODS', fetchNews); 
     yield takeLatest('GET_FOOD_ID',fetchFoodId)
     //Listens for  a "GET_FOODS" custom action that is triggerd by ./containers/Button.js &
     //it returns a pending 'GET_FOODS'  notification to the caller indicating data retreival has commenced 
     //Watcher Saga listens to the triggered actions and then triggers the Worker Saga by calling fetchNews()
}

export default function* rootSaga() { /*Generator function with *.  
                                        Root Saga: All wacther sagas must be registered with the rootSaga */
   yield all([                        /*All the wacther sagas registered here are executed one by one. 
                                        Yield returns the value, one saga function at a  time */
     actionWatcher(),                 //watcher Saga function defined above
   ]);
}