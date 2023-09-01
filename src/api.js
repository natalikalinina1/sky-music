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
  console.log(data);
  return data;
}

export async function getFavoriteTracks() {
  const response = await fetch(
    "https://painassasin.online/catalog/track/favorite/all/",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("token")).access
        }`,
      },
    }
  );

  if (response.status === 500) {
    throw new Error("Сервер сломался");
  } else if (response.status === 401) {
    throw new Error("bad token");
  }

  const data = await response.json();
  return data;
}

export async function addTrackToFavorite(id) {
  const response = await fetch(
    `https://painassasin.online/catalog/track/${id}/favorite/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("token")).access
        }`,
      },
    }
  );
  if (response.status === 500) {
    throw new Error("Сервер сломался");
  } else if (response.status === 401) {
    throw new Error("bad token");
  }

  const data = await response.json();
  return data;
}

export async function deleteFromFav(id) {
  const response = await fetch(
    `https://painassasin.online/catalog/track/${id}/favorite/`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("token")).access
        }`,
      },
    }
  );
  if (response.status === 500) {
    throw new Error("Сервер сломался");
  } else if (response.status === 401) {
    throw new Error("bad token");
  }
  const data = await response.json();
  return data;
}
export async function registerUser(email, password) {
  const response = await fetch("https://painassasin.online/user/signup/", {
    method: "POST",
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
      username: `${email}`,
    }),
    headers: {
 
      "content-type": "application/json",
    },
  });
  if (response.status === 500) {
    throw new Error("Сервер сломался");
  } else if (response.status === 400) {
    console.log(response.status);
    const data = await response.json();
    if (data.username) {
      throw new Error(`${data.username}`);
    } else {
      throw new Error(`${data.password}`);
    }
  }
  const data = await response.json();
  return data;
}

export async function loginUser(email, password) {
  const response = await fetch("https://painassasin.online/user/login/", {
    method: "POST",
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
    }),
    headers: {
      
      "content-type": "application/json",
    },
  });
  if (response.status === 500) {
    throw new Error("Сервер сломался");
  } else if (response.status === 401) {
    console.log(response.status);
    const data = await response.json();
    throw new Error(`${data.detail}`);
  }

  const data = await response.json();
  return data;
}

export async function getToken(email, password) {
  const response = await fetch("https://painassasin.online/user/token/", {
    method: "POST",
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
    }),
    headers: {
      
      "content-type": "application/json",
    },
  });
  if (response.status === 500) {
    throw new Error("Сервер сломался");
  } else if (response.status === 401) {
    throw new Error("bad token");
  }

  const data = await response.json();
  return data;
}

export async function updateToken(token) {
  console.log("token " + token);
  const response = await fetch(
    "https://painassasin.online/user/token/refresh/",
    {
      method: "POST",
      body: JSON.stringify({
        refresh: `${token}`,
      }),
      headers: {
       
        "content-type": "application/json",
      },
    }
  );

  const data = await response.json();
  return data;
}

