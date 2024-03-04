import { json } from 'react-router-dom'
import { XBOX_API_KEY } from '../../consts.js'

export const getXuidFromUsername = (name) => {
  return fetch(`/api/v2/search/${name}`, {
    headers: {
      'x-authorization': XBOX_API_KEY,
      // 'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
      // 'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => json.people[0].xuid)
    .catch(err => console.log(err))
}

export const getGamesFromXuid = (xuid) => {
  return fetch(`/api/v2/achievements/player/${xuid}`, {
    headers: {
      'x-authorization': XBOX_API_KEY,
      'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
      // 'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
      // 'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => json)
    .catch(err => console.log(err))
}

export const getXboxUserProfile = (username) => {
  return fetch(`/api/v2/search/${username}`, {
    headers: {
      'x-authorization': XBOX_API_KEY,
      'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8'
    }
  })
    .then(res => res.json())
    .then(json => {
      return json
    })
}
