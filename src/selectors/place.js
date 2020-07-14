export const getAllPlaces = (state) => {
    const allPlace = state.place.getAllPlace
    console.log("all",allPlace.result);
    if (allPlace && allPlace.result) {
        console.log("alldata",allPlace.result.data);
      return allPlace.result.data
    }
    return null
}