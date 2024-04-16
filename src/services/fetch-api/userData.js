import { getUserTitles, getUserProfile } from '../psn-api/playFunctions'
import { getXuidFromUsername, getGamesFromXuid, getXboxUserProfile } from '../openxbl-api/xboxFunctions'
import { mapPlayStationGames, mapPlayProfile, mapXboxGames, mapXboxProfile } from '../../helpers/helpers'
// import { fetchAllGameInfo } from '../rawg/rawg-game-info'

export const getPlayUserData = async (psnUsername) => {
  const res = {
    psnTitles: null,
    psnProfile: null,
    psnGameImages: null
  }

  const psnProfile = await getUserProfile(psnUsername)
  const psnTitles = await getUserTitles(psnUsername)
  res.psnTitles = mapPlayStationGames(psnTitles.trophyTitles, psnProfile.profile)
  res.psnProfile = mapPlayProfile(psnProfile.profile)

  return res
}

export const getXboxUserData = async (xblUsername) => {
  const res = {
    xblTitles: null,
    xblProfile: null,
    xboxGameImage: null
  }

  const xblId = await getXuidFromUsername(xblUsername)
  const xblTitles = await getGamesFromXuid(xblId)
  const xblProfile = await getXboxUserProfile(xblUsername)
  res.xblTitles = mapXboxGames(xblTitles)
  res.xblProfile = mapXboxProfile(xblProfile.people, xblTitles.titles)
  return res
}
