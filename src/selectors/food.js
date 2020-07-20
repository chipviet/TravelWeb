export const getAllFoodSelector = (state) => {
    const data = state.food.getAllFood
    console.log('state',state)
    if (data && data.result) {
      return data.result.data.food 
    }
    return null
  }