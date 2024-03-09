// import { uploadTokenAuth, getUserId, getUserGamesFromId } from './psnTokenRefresh.js'
// import { exchangeRefreshTokenForAuthTokens, getProfileFromUserName, getUserTitles } from 'psn-api'
// import authPsn from './authPsn.json' assert {type: 'json'}

// const auth = await uploadTokenAuth(authPsn)
// const userId = await getUserId(auth, 'teno19_')
// const userGames = await getUserGamesFromId(auth, userId)

// import hollowInfo  from '../mocks/INFO/xboxHollowInfo.json' assert {type: 'json'}
// import { mapXboxGameInfo } from '../scripts/TROPHY/getAvailableTrophies.js'
// const mappedInfo = mapXboxGameInfo(hollowInfo)

const fetchAllGameInfo = async () => {
  // Obtengo el guid
  const reponseGuid = await fetch('https://www.giantbomb.com/api/search/?api_key=7832659a0f9760b77a1355f155cf78bd55c4220b&format=json&query=bloodborne&resources=game&limit=1&field_list=guid')
  const idSearchInfo = await reponseGuid.json()
  const guid = idSearchInfo.results[0].guid

  console.log(guid)

  // Obtengo toda la Información  const responseInfo = await fetchAllGameInfo('https://www.giantbomb.com/api/game/3030-46569/?api_key=7832659a0f9760b77a1355f155cf78bd55c4220b&format=json&field_list=original_release_date,company,companies,genres,platforms,name,deck,characters,locations,developers')
  const responseInfo = await fetch('https://www.giantbomb.com/api/game/3030-46569/?api_key=7832659a0f9760b77a1355f155cf78bd55c4220b&format=json&field_list=original_release_date,company,companies,genres,platforms,name,deck,characters,locations,developers')
  const allGameInfo = await responseInfo.json()

  console.log(allGameInfo)
}
await fetchAllGameInfo()
// https://www.giantbomb.com/api/game/3030-46569/?api_key=7832659a0f9760b77a1355f155cf78bd55c4220b&format=json&field_list=original_release_date,company,companies,genres,platforms,name,deck,characters,locations,developers
