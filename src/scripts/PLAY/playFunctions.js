export const getUserTitles = (username) => {
  return fetch(`/psn-api/userGames&Achievements/${username}`)
    .then(res => res.json())
    .then(json => json)
}
