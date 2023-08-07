const URL_TRACKS ='https://painassasin.online'
export const getAllTracks = async () => {
    const response = await fetch(URL_TRACKS + '/catalog/track/all/')
    return await response.json()
}

export const getCollections = async (id) => {
    const response = await fetch(URL_TRACKS + `/catalog/selection/${id}/`)
    return await response.json()
}

