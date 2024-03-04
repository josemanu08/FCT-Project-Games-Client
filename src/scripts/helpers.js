// import profilePSN from '../mocks/userPlaystation.json' assert {type:'json'}
// import profileXBOX from '../mocks/userXbox.json' assert {type:'json'}

export const mapXboxGames = (gamesObj) => {
  return gamesObj.map((title) => {
    return ({
      name: title.name,
      currentAchievements: title.achievement.currentAchievements,
      percentaje: title.achievement.progressPercentage,
      platform: 'xbox',
      icon: title.displayImage,
      earnedTrophies: title.achievement.currentAchievements,
      currentGamerscore: title.achievement.currentGamerscore,
      totalGamerscore: title.achievement.totalGamerscore,
      titlePlatforms: title.devices
    })
  })
}

export const mapPlayStationGames = (gamesObj) => {
  return gamesObj.map((title) => {
    return ({
      name: title.trophyTitleName,
      currentAchievements: title.earnedTrophies,
      percentaje: title.progress,
      platform: 'playStation',
      icon: title.trophyTitleIconUrl,
      definedTrophies: Object.values(title.definedTrophies).reduce((acc, value) => acc + value),
      earnedTrophies: Object.values(title.earnedTrophies).reduce((acc, value) => acc + value),
      titlePlatforms: title.trophyTitlePlatform
    })
  })
}

export const mapPlayProfile = (profile) => {
  return ({
    username: profile.onlineId,
    icon: profile.avatarUrls[0].avatarUrl,
    TrohySummary: {
      platinum: profile.trophySummary.earnedTrophies.platinum,
      gold: profile.trophySummary.earnedTrophies.gold,
      silver: profile.trophySummary.earnedTrophies.silver,
      bronze: profile.trophySummary.earnedTrophies.bronze
    }
  })
}

export const mapXboxProfile = (profile, xboxState) => {
  return ({
    username: profile[0].gamertag,
    icon: profile[0].displayPicRaw,
    gamerScore: profile[0].gamerScore,
    tier: profile[0].detail.accountTier,
    total: calcTotalTrophiesXbox(xboxState)
  })
}

export const calcTotalTrophiesXbox = (xboxState) => {
  return xboxState.reduce((acc, obj) => { return acc + obj.achievement.currentAchievements }, 0)
}

export const applyFilters = (gamesObj, filters) => {
  return gamesObj.filter((game) => {
    return ((game.name.toLowerCase().includes(filters.search) || !filters.search) &&
   (game.platform === filters.platform || filters.platform === 'both'))
  })
}
