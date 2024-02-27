import { uploadTokenAuth, getUserId, getUserGamesFromId } from './psnTokenRefresh.js'
import { exchangeRefreshTokenForAuthTokens, getProfileFromUserName, getUserTitles } from 'psn-api'
import authPsn from './authPsn.json' assert {type: 'json'}

const auth = await uploadTokenAuth(authPsn)
const userId = await getUserId(auth, 'teno19_')
const userGames = await getUserGamesFromId(auth, userId)
