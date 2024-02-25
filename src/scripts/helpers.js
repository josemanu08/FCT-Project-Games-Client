export const mapXboxGames = (gamesObj) => {
  return gamesObj.map((title) => {
    return ({
      name: title.name,
      currentAchievements: title.achievement.currentAchievements,
      percentaje: ((title.achievement.currentGamerscore * 100) / title.achievement.totalGamerscore).toFixed(2),
      platform: 'xbox'
    })
  })
}

export const mapPlayStationGames = (gamesObj) => {
  return gamesObj.map((title) => {
    return ({
      name: title.trophyTitleName,
      currentAchievements: title.earnedTrophies,
      percentaje: title.progress,
      platform: 'playStation'
    })
  })
}
