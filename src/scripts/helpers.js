export const mapXboxGames = (gamesObj) => {
  return gamesObj.xbox?.titles.map((title) => {
    return ({
      name: title.name,
      currentAchievements: title.achievement.currentAchievements,
      percentaje: (title.achievement.currentGamerscore * 100) / title.achievement.totalGamerscore
    })
  })
}
