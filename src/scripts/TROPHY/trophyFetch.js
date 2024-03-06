import { XBOX_API_KEY } from '../../consts'

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
