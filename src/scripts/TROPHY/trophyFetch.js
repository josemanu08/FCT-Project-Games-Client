import { XBOX_API_KEY } from '../../consts'

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
// Modifico la información obtenida de la api de trofeos en un formato que pueda usar más
export const getAvailableTrophies = async (userId, titleId) => {
  const myTrophies = await fetchTrophies(userId, titleId)
  const allGameTrophies = await fetchAllTrophies(titleId)

  // Información de Los Trofeos ganados que necesito
  const myMappedTrophies = myTrophies.tDetails.trophies
    .filter(t => t.earned)
    .map(t => ({
      tId: t.trophyId,
      date: t.earnedDateTime,
      earnedRate: t.trophyEarnedRate
    }))

  const earnedIds = myTrophies.tDetails.trophies.filter(t => t.earned).map(t => (t.trophyId))

  const myMappedAllGameTrophies = allGameTrophies.trophies.filter(t => earnedIds.includes(t.trophyId))
  const mixedTrophiesInfo = myMappedAllGameTrophies.map((t, index) => (
    {
      tId: myMappedTrophies[index].tId,
      gId: t.trophyGroupId,
      name: t.trophyName,
      date: myMappedTrophies[index].date,
      earnedRate: myMappedTrophies[index].earnedRate,
      icon: t.trophyIconUrl,
      detail: t.trophyDetail
    }
  ))

  console.log(mixedTrophiesInfo)
  return mixedTrophiesInfo
}
// /psn-api/trophyDetails?userId=7397312102069087760&titleId=NPWR05818_00

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
