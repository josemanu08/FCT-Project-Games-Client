import { exchangeRefreshTokenForAuthTokens, getProfileFromUserName, getUserTitles } from 'psn-api';
import authorization from './authPsn.json' assert {type:'json'};
import expDate from './expirationDate.json' assert {type:'json'};
import fs from 'node:fs/promises'
import { get } from 'node:http';

/*if(new Date().getTime() > expDate.expDate){
    const newAuth = await exchangeRefreshTokenForAuthTokens(authorization.refreshToken)

    await fs.writeFile('Test01\\src\\scripts\\expirationDate.json',
    JSON.stringify({ expDate: new Date().getTime() + (newAuth.expiresIn * 1000) }))

    await fs.writeFile('Test01\\src\\scripts\\authPsn.json', JSON.stringify(newAuth))
}else{
    console.log('Por ahora va bien la cosa')
}*/

export const uploadTokenAuth = async (token) => {
    if(new Date().getTime() > expDate.expDate){
        const newAuth = await exchangeRefreshTokenForAuthTokens(token.refreshToken)
    
        await fs.writeFile('Test01\\src\\scripts\\expirationDate.json',
        JSON.stringify({ expDate: new Date().getTime() + (newAuth.expiresIn * 1000) }))
    
        await fs.writeFile('Test01\\src\\scripts\\authPsn.json', JSON.stringify(newAuth))

        return newAuth
    }else{
        console.log('Por ahora va bien la cosa')
        return token
    }
}

export const getUserId = async (auth, username) => {
    return ((await getProfileFromUserName(auth, username)).profile.accountId)
}

export const getUserGamesFromId = async (auth, userId) => {
    return await getUserTitles(auth, userId)
}

/*const tenoId = await getUserId(authorization, 'teno19_')
const tenoGames = await getUserGamesFromId(authorization, tenoId)
console.log(tenoGames)*/