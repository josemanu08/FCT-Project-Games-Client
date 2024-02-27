import { XBOX_API_KEY, MY_XBOX_USER_ID, LIES_OF_P_ID } from '../../consts.js'

export const getXuidFromUsername = (name) => {
  return fetch(`/api/v2/search/${name}`, {
    headers: {
      'x-authorization': '7bf89c48-8174-4f34-bdd4-716cc07fe5f7',
      // 'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
      // 'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json',
      'X-Contract': '100'
    }
  })
    .then(res => res.json())
    .then(json => json.people[0].xuid)
}

export const getGamesFromXuid = (xuid) => {
  fetch(`/api/v2/achievements/player/${xuid}`, {
    headers: {
      'x-authorization': '7bf89c48-8174-4f34-bdd4-716cc07fe5f7',
      'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
      // 'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
      // 'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json',
      'X-Contract': '100'
    }
  })
    .then(res => res.json())
    .then(json => json)
}
