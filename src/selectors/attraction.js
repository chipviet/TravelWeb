export const getAllAttractionSelector = (state) => {
    const data = state.attraction.getAllAttraction
    if (data && data.result) {
        return data.result.data.hotplaces
    }
    return null
}

export const getAttractionSelector = (state) => {
    const data = state.attraction
    if (data && data.result) {
        console.log('data', data.result.data)
        //return data.result.data
    }
    return null
}  