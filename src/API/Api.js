const URL_TRACKS = 'https://painassasin.online/catalog/ ';

// const URL_USERS = 'https://painassasin.online/catalog/';

export const getAllTracks = async () => {
    const response = await fetch(URL_TRACKS + 'track/all/');
    return await response.json();}
    