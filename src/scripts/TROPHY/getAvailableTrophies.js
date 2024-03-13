import { fetchTrophies, fetchAllTrophies, fetchXboxTrophies, fetchGameData, fetchAllGameInfo } from './trophyFetch'

// Modifico la información obtenida de dos endpoints para que sea más completa (para que tenga fotitos 😉)
export const getAvailableTrophiesGameInfo = async (userId, titleId, gameName) => {
  const myTrophies = await fetchTrophies(userId, titleId)
  const allGameTrophies = await fetchAllTrophies(titleId)
  const gameInfo = await fetchAllGameInfo(gameName)

  // Información de Los Trofeos ganados que necesito
  const myMappedTrophies = myTrophies.tDetails.trophies
    .filter(t => t.earned)
    .map(t => ({
      tId: t.trophyId,
      date: t.earnedDateTime,
      earnedRate: t.trophyEarnedRate
    }))

  const myRarestTrophies = [myTrophies.tDetails.rarestTrophies]

  // Ids de los trofeos ganados
  const earnedIds = myTrophies.tDetails.trophies.filter(t => t.earned).map(t => (t.trophyId))

  // Trofeos con información adicional ganados
  const myMappedAllGameTrophies = allGameTrophies.trophies.filter(t => earnedIds.includes(t.trophyId))

  // Unión de información entre los trofeos
  const mixedTrophiesInfo = allGameTrophies.trophies
    .filter(t => earnedIds.includes(t.trophyId))
    .map((t, index) => (
      {
        achieved: earnedIds.includes(t.trophyId),
        tId: t.trophyId,
        gId: t.trophyGroupId,
        name: t.trophyName,
        date: myMappedTrophies[index]?.date,
        earnedRate: myMappedTrophies[index]?.earnedRate,
        icon: t.trophyIconUrl,
        detail: t.trophyDetail
      }
    ))// .concat(myRarestTrophies)

  const result = {}
  result.ti = mixedTrophiesInfo
  result.gi = gameInfo
  console.log(result.ti)
  return result
}

export const getXboxAvailableTrophies = async (userId, titleId) => {
  const response = {}
  const trophies = await fetchXboxTrophies(userId, titleId)
  const gameData = await fetchGameData(titleId)
  // const GameInfo = await
  // response.push({ TrophieInfo: trophies.achievements.filter(a => a.progressState === 'Achieved') })

  const mappedTrophies = trophies.achievements
    .filter(tr => tr.progressState === 'Achieved')
    .map(tr => ({
      achieved: tr.progressState === 'Achieved',
      tId: tr.id,
      name: tr.name,
      gameName: tr.titleAssociations[0].name,
      date: tr.progression.timeUnlocked,
      earnedRate: tr.rarity.currentPercentage,
      icon: tr.mediaAssets[0].url,
      detail: tr.description
    }))

  response.tr = mappedTrophies
  response.ti = mapXboxGameInfo(gameData)[0]
  return response
}

// Mapeo toda la información que me da el endpoint del juego en el Marketplace
export const mapXboxGameInfo = (gameInfo) => {
  if (!gameInfo) return

  return gameInfo.Products.map((productInfo) => ({
    name: productInfo.LocalizedProperties[0].ProductTitle,
    developerName: productInfo.LocalizedProperties[0].DeveloperName,
    website: productInfo.LocalizedProperties[0].PublisherWebsiteUri,
    price: productInfo.DisplaySkuAvailabilities[0].Availabilities[0].OrderManagementData.Price.MSRP,
    search: productInfo.LocalizedProperties[0].SearchTitles,
    imgs: [
      ...productInfo.LocalizedProperties[0].Images.filter(img => img.ImagePurpose === 'BoxArt'),
      ...productInfo.LocalizedProperties[0].Images.filter(img => img.ImagePurpose === 'SuperHeroArt'),
      ...productInfo.LocalizedProperties[0].Images.filter(img => img.ImagePurpose === 'Screenshot')
    ],
    longDescription: productInfo.LocalizedProperties[0].ProductDescription,
    shortDescription: productInfo.LocalizedProperties[0].ShortDescription,
    releaseDate: productInfo.MarketProperties[0].OriginalReleaseDate,
    categories: productInfo.Properties.Categories
  }))
}

/*
imgs:
{
      logo: productInfo.LocalizedProperties[0].Images.filter(img => img.ImagePurpose === 'BoxArt'),
      backgroundImage: productInfo.LocalizedProperties[0].Images.filter(img => img.ImagePurpose === 'SuperHeroArt'),
      screenShots: productInfo.LocalizedProperties[0].Images.filter(img => img.ImagePurpose === 'Screenshot')
    }
*/
