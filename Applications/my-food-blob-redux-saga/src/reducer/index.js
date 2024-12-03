//Reducer : manages state in redux store and retuns the the final state to the view

const reducer = (state = {}, action) => { //passes initial state and action to the function. Populated by the system
     switch (action.type) {
          case 'GET_FOODS':                     /*action type to be processed by this reducer, until data arrives from the 
                                                  REST-API (pending action)*/
               return { ...state, loading: true }; /*... Spread operator that expands the data array wihtout need for iteration code, 
                                                  if data is available*/
          case 'FOODS_RECEIVED':                 /*action type to be processed by this reducer, once data arrives from the 
                                                   REST-API (completed action)*/
               return { ...state, foods: action.json, loading: false }
          /*... Spread operator that expands the "products" data array wihtout need 
            of for loop. 'loading' is set= false once REST data arrives false also 
            indicates no other action to be processed after this action */
          case 'GET_FOOD_ID':                     /*action type to be processed by this reducer, until data arrives from the 
            REST-API (pending action)*/
               return { ...state, loading: true }; /*... Spread operator that expands the data array wihtout need for iteration code, 
            if data is available*/
          case 'FOOD_RECEIVED_ID':                 /*action type to be processed by this reducer, once data arrives from the 
             REST-API (completed action)*/
               return { ...state, foodDetails: action.json, loading: false }
          default:
               return state;                         //default state returned   
     }
};
export default reducer;