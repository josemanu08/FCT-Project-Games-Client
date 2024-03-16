import { XBOX_API_KEY, GIANT_BOMB_API_KEY } from '../../consts/consts'

// PLAY ------------------------------------------------
export const fetchTrophies = async (userId, titleId) => {
  const response = await fetch(`/psn-api/trophyDetails?userId=${userId}&titleId=${titleId}`)
  // const response = await fetch('/psn-api/trophyDetails?userId=7397312102069087760&titleId=NPWR05818_00')
  const tropies = await response.json()
  return tropies
}

export const fetchAllTrophies = async (titleId) => {
  const response = await fetch(`/psn-api/allTrophies/${titleId}`)
  const allTrophies = await response.json()
  return allTrophies
}

// USO DE GIANTBOMBAPI
export const fetchAllGameInfo = async (gameName) => {
  // Obtengo el guid
  const reponseGuid = await fetch(`/api/search/?api_key=${GIANT_BOMB_API_KEY}&format=json&query=${gameName}&resources=game&limit=1&field_list=guid`)
  const idSearchInfo = await reponseGuid.json()
  const guid = idSearchInfo.results[0].guid
  // Obtengo toda la Información  const responseInfo = await fetchAllGameInfo('https://www.giantbomb.com/api/game/3030-46569/?api_key=7832659a0f9760b77a1355f155cf78bd55c4220b&format=json&field_list=original_release_date,company,companies,genres,platforms,name,deck,characters,locations,developers')
  const responseInfo = await fetch(`/api/game/${guid}/?api_key=${GIANT_BOMB_API_KEY}&format=json&field_list=original_release_date,company,companies,genres,platforms,name,deck,characters,locations,developers,images,image`)
  const allGameInfo = await responseInfo.json()

  return allGameInfo
}
// /psn-api/trophyDetails?userId=7397312102069087760&titleId=NPWR05818_00
// PLAY -------------------------------------------------

// XBOX -------------------------------------------------
export const fetchXboxTrophies = async (userId, titleId) => {
  const response = await fetch(`/api/v2/achievements/player/${userId}/${titleId}`, {
    headers: {
      'x-authorization': XBOX_API_KEY,
      'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8'
    }
  })
  const xboxTrophies = await response.json()
  return xboxTrophies
}

export const fetchGameData = async (titleId) => {
  const response = await fetch(`/api/v2/marketplace/title/${titleId}`, {
    headers: {
      'x-authorization': XBOX_API_KEY,
      'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8'
    }
  })
  const gameData = await response.json()
  return gameData
}
// XBOX -------------------------------------------------
