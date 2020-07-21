export const getAllPlaces = (state) => {
  const data = state.place.getAllPlace
  console.log("state", state);
  if (data && data.result) {
    console.log("alldata", data.result.data.places);
    return data.result.data.places
  }
  return null
}

export const getPlaceSelected = (state) => {
  const data = state.place.getPlace
  if (data && data.result) {
    console.log("alldata", data.result.data);
    return data.result.data
  }
  return null
}