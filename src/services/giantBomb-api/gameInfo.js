import { GIANT_BOMB_API_KEY } from '../../consts/consts'

export const fetchAdditionalInfo = async (gameName) => {
  // Obtengo el guid
  const reponseGuid = await fetch(`/api/search/?api_key=${GIANT_BOMB_API_KEY}&format=json&query=${gameName}&resources=game&limit=1&field_list=guid`)
  const idSearchInfo = await reponseGuid.json()
  const guid = idSearchInfo.results[0].guid
  // Obtengo toda la Información  const responseInfo = await fetchAllGameInfo('https://www.giantbomb.com/api/game/3030-46569/?api_key=7832659a0f9760b77a1355f155cf78bd55c4220b&format=json&field_list=original_release_date,company,companies,genres,platforms,name,deck,characters,locations,developers')
  const responseInfo = await fetch(`/api/game/${guid}/?api_key=${GIANT_BOMB_API_KEY}&format=json&field_list=original_release_date,company,companies,genres,platforms,name,deck,characters,locations,developers,images,image`)
  const allGameInfo = await responseInfo.json()

  return allGameInfo
}
