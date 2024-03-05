import { getUserTitles, getUserProfile } from '../PLAY/playFunctions'
import { getXuidFromUsername, getGamesFromXuid, getXboxUserProfile } from '../XBOX/xboxFunctions'
import { mapPlayStationGames, mapPlayProfile, mapXboxGames, mapXboxProfile } from '../helpers'

export const getPlayUserData = async (psnUsername) => {
  const res = {
    psnTitles: null,
    psnProfile: null
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
    xblProfile: null
  }

  const xblId = await getXuidFromUsername(xblUsername)
  const xblTitles = await getGamesFromXuid(xblId)
  const xblProfile = await getXboxUserProfile(xblUsername)
  res.xblTitles = mapXboxGames(xblTitles)
  res.xblProfile = mapXboxProfile(xblProfile.people, xblTitles.titles)

  return res
}
