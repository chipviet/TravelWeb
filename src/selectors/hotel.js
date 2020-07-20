export const getAllHotelSelector = (state) => {
  const data = state.hotel.getAllHotel
  if (data && data.result) {
    console.log(data.result.data.hotels)
    return data.result.data.hotels
    
  }
  return null
}

export const getHotelSelector = (state) => {
  const data = state.hotel.getHotel
  console.log('state Hotel',data)
  if (data && data.result) {
    return data.result.data
  }
  return null
}