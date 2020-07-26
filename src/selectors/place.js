export const getAllPlaces = (state) => {
  const data = state.place.getAllPlace
  if (data && data.result) {
    return data.result.data.places
  }
  return null
}

export const getPlaceSelected = (state) => {
  const data = state.place.getPlace
  if (data && data.result) {
    return data.result.data
  }
  return null
}