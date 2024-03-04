export const getUserTitles = (username) => {
  return fetch(`/psn-api/userGames&Achievements/${username}`)
    .then(res => res.json())
    .then(json => {
      console.log('api call')
      return json
    })
}

export const getUserProfile = (username) => {
  return fetch(`/psn-api/userDetails/${username}`)
    .then(res => res.json())
    .then(json => json)
}
