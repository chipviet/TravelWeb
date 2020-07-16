export const getAllPlaces = (state) => {
  const allPlace = state.place.getAllPlace
  console.log("all", allPlace.result);
  if (allPlace && allPlace.result) {
    console.log("alldata", allPlace.result.data);
    return allPlace.result.data
  }
  return null
}

export const getPlacebyIdSelected = (state) => {
  const data = state.place.getPlacebyId
  console.log("state", state.place);
  if (data && data.result) {
    console.log("alldata", data.result.data);
    return data.result.data
  }
  return null
}