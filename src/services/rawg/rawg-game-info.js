import { RAWG_API_KEY } from '../../consts/consts.js'

export const fetchAllGameInfo = async (name) => {
  const result = {}
  const firstResponse = await fetch(`/api/games?key=${RAWG_API_KEY}&search=${name}`, {
    headers: {
      'Content-Type': 'application/JSON',
      'Access-Control-Allow-Origin': '*'
    }
  })

  // const responseTextInfo = await firstResponse.text()
  // console.log('FIRST_RAWG_RESPONSE ', responseTextInfo)
  const screenImageInfo = await firstResponse.json()

  result.screen_shots = [...screenImageInfo.results[0].short_screenshots]
  result.id = screenImageInfo.results[0].id
  result.genres = screenImageInfo.results[0].genres.map(genre => genre.name)

  const secondResponse = await fetch(`/api/games/${result.id}?key=${RAWG_API_KEY}`, {
    headers: {
      'Content-Type': 'application/JSON',
      'Access-Control-Allow-Origin': '*'
    }
  })
  const descriptionInfo = await secondResponse.json()

  result.developers = descriptionInfo.developers.map(dev => dev.name)
  result.description = descriptionInfo.description
  result.date = descriptionInfo.released
  result.background_image = descriptionInfo.background_image
  result.background_image_additional = descriptionInfo.background_image_additional
  result.clip = descriptionInfo?.clip
  result.name = descriptionInfo.name
  result.metacritic = descriptionInfo.metacritic
  result.ratings = descriptionInfo.ratings
  result.rating_top = descriptionInfo.rating_top
  result.tags = descriptionInfo.tags
  result.platforms = descriptionInfo.platforms

  return result
}
