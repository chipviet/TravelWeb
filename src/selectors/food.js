export const getAllFoodSelector = (state) => {
    const data = state.food.getAllFood
    console.log('state',state)
    if (data && data.result) {
      return data.result.data.food 
    }
    return null
  }

  export const getFoodSelector = (state) => {
    const data = state.food.getFood
    console.log('state Food',data)
    if (data && data.result) {
      console.log('data',data.result.data)
      return data.result.data
    }
    return null
  }  