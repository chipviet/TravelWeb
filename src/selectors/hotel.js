export const getAllHotelSelector = (state) => {
    const data = state.hotel.getAllHotel
    if (data && data.result) {
      console.log("alldata", data.result.data);
      return data.result.data
    }
    return null
  }