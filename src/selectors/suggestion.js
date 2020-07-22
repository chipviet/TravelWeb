export const getFoodSuggestionSelector = (state) => {
  const data = state.suggestion.getFoodSuggestion
  if (data && data.result) {
    return data.result.data
  }
  return null
}

export const getHotelSuggestionSelector = (state) => {
  const data = state.suggestion.getHotelSuggestion
  if (data && data.result) {
    return data.result.data
  }
  return null
}

export const getPlaceSuggestionSelector = (state) => {
  const data = state.suggestion.getPlaceSuggestion
  console.log('1', data)
  if (data && data.result) {
    return data.result.data
  }
  return null
} 