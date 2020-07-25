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

export const getAttractionSuggestionSelector = (state) => {
  const data = state.suggestion.getAttractionSuggestion
  // console.log('1', data)
  if (data && data.result) {
    return data.result.data
  }
  return null
} 