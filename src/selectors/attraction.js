export const getAllAttractionSelector = (state) => {
    const data = state.Attraction.getAllAttraction
    console.log('state', state)
    if (data && data.result) {
        return data.result.data.Attraction
    }
    return null
}

export const getAttractionSelector = (state) => {
    const data = state.Attraction.getAttraction
    console.log('state Attraction', data)
    if (data && data.result) {
        console.log('data', data.result.data)
        return data.result.data
    }
    return null
}  