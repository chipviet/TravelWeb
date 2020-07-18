export const getAllHotelSelector = (state) => {
  const data = state.hotel.getAllHotel
  if (data && data.result) {
    return data.result.data.hotels
  }
  return null
}

export const getHotelSelector = (state) => {
  const data = state.hotel.getHotel
  if (data && data.result) {
    return data.result.data
  }
  return null
}