//action definition

export const getFoods = () => ({
    type: 'GET_FOODS' //action type: used to trigger the action that is handled by the '/reducers/index.js' file
});
export function getFoodById(ID) {
    return { type: "GET_FOOD_ID", payload:{ID} };
  }

