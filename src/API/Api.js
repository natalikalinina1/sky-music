
const URL_TRACKS ='https://painassasin.online'
export const getAllTracks = async () => {
    const response = await fetch(URL_TRACKS + '/catalog/track/all/')
    return await response.json()
}

export const getCompilation = async (id) => {
  const response = await fetch(URL_TRACKS + `/catalog/selection/${id}/`)
  return await response.json()
}

export async function getTracks() {
  
  const response = await fetch("https://painassasin.online/catalog/track/all/");

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}
export const registration = async (body) => {
  const response = await fetch(URL_TRACKS + '/user/signup/', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
          'Content-Type': 'application/json;charset=utf-8',
      },
  })
  return await response.json()
}

export const login = async (body) => {
  const response = await fetch(URL_TRACKS + '/user/login/', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
          'Content-Type': 'application/json;charset=utf-8',
      },
  })
  return await response
}

export const getToken = async (body) => {
  const response = await fetch(URL_TRACKS + '/user/token/', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
          'Content-Type': 'application/json;charset=utf-8',
      },
  })
  return await response
}