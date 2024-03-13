// import profilePSN from '../mocks/userPlaystation.json' assert {type:'json'}
// import profileXBOX from '../mocks/userXbox.json' assert {type:'json'}

export const mapXboxGames = (gamesObj) => {
  const games = gamesObj.titles
  return games.map((title) => {
    return ({
      userId: gamesObj.xuid,
      id: title.titleId,
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

export const mapPlayStationGames = (gamesObj, playProfile) => {
  return gamesObj.map((title) => {
    return ({
      accId: playProfile.accountId,
      id: title.npCommunicationId,
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
    id: profile.accountId,
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
// DetailsSection

export const mapPlayImages = (image, images) => {
  const result = images
    .filter((img) => {
      return (img.tags.toLowerCase().includes('screenshots') ||
      img.tags.toLowerCase().includes('box art'))
    })
    .reverse()
    .map(img => ({
      Uri: img.super_url,
      tag: img.tags
    }))
  result.unshift({ Uri: image.original_url })
  return result
}

// name, developerNamem, releaseDate, shortDescription, website

export const mapTitleInfo = (results) => {
  return ({
    name: results.name,
    shortDescription: results.deck,
    releaseDate: results.original_release_date,
    developerName: results.developers[0].name
  })
}

export const mapCategories = (genres) => {
  return {
    categories: genres.map(genre => genre.name)
  }
}

// TUNCIONES DE TROPHY-ADITIONAL-INFO
export const getFirstTrophy = (trophies) => {
  const dates = trophies
    .filter(tr => tr.achieved)
    .map(tr => (new Date(tr.date)).getTime())
  const firstTrophy = trophies.find(tr => (new Date(tr.date)).getTime() === Math.min(...dates))
  return firstTrophy
}

export const getLatestTrophy = (trophies) => {
  const dates = trophies
    .filter(tr => tr.achieved)
    .map(tr => (new Date(tr.date)).getTime())
  const latestTrophy = trophies.find(tr => (new Date(tr.date)).getTime() === Math.max(...dates))
  return latestTrophy
}

export const getRarestTrophies = (trophies) => {
  const rarestTrophies = trophies
    .filter(tr => tr.achieved)
    .sort((a, b) => a.earnedRate - b.earnedRate)
    .slice(0, 5)
  return rarestTrophies
}
