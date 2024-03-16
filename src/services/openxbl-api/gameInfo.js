import { XBOX_API_KEY } from '../../consts/consts'

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
