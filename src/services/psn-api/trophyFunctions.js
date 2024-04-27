export const fetchTrophies = async (userId, titleId) => {
  const response = await fetch(`/psn-api/trophyDetails?userId=${userId}&titleId=${titleId}`, {
    headers: {
      'Content-Type': 'application/JSON',
      'Access-Control-Allow-Origin': '*'
    }
  })
  // const response = await fetch('/psn-api/trophyDetails?userId=7397312102069087760&titleId=NPWR05818_00')
  const tropies = await response.json()
  return tropies
}

export const fetchAllTrophies = async (titleId) => {
  const response = await fetch(`/psn-api/allTrophies/${titleId}`)
  const allTrophies = await response.json()
  return allTrophies
}
