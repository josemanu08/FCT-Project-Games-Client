export const usePlay = ({ userData }) => {
  const [playStationState, setPlaystationState] = useState([])

  useEffect(() => {
    if (!userData.playStationUsername && !playStationState) return

    if (!userData.playStationUsername && playStationState) {
      setPlaystationState([])
    }

    /* getUserTitles(userData.playStationUsername)
        .then(res => {
          setPlaystationState(mapPlayStationGames(res.trophyTitles))
        }) */
    setPlaystationState(mapPlayStationGames(myGames.trophyTitles))
  }, [userData.playStationUsername])

  return { playStationState }
}

export const usePlayProfile = ({ userData }) => {
  const [ProfilePSN, setProfile] = useState(null)

  useEffect(() => {
    if (!userData.playStationUsername && !ProfilePSN) return

    if (!userData.playStationUsername && ProfilePSN) {
      setProfile(null)
    }
    /* getUserProfile(userData.playStationUsername)
        .then(profile => {
          setProfile(mapPlayProfile(profile.profile))
        }) */
    setProfile(mapPlayProfile(PSNProfile.profile))
  }, [userData.playStationUsername])

  return { ProfilePSN }
}

export const useXbox = ({ userData }) => {
  const [xboxState, setXboxState] = useState([])
  useEffect(() => {
    if (!userData.xboxUsername && !xboxState) return

    if (!userData.xboxUsername && xboxState) {
      setXboxState([])
      return
    }
    /* getXuidFromUsername(userData.xboxUsername)
      .then(xuid => getGamesFromXuid(xuid))
      .then(games => setXboxState(mapXboxGames(games.titles))) */
    setXboxState(mapXboxGames(myGamesXbox.titles))
  }, [userData.xboxUsername])

  return { xboxState }
}

export const useXboxProfile = ({ userData, xboxState }) => {
  const [ProfileXbox, setProfileXbox] = useState(null)

  useEffect(() => {
    // Mejorable
    // || !xboxState.length
    if (!userData.xboxUsername && !ProfileXbox) return

    if (!userData.xboxUsername && ProfileXbox) {
      setProfileXbox(null)
    }

    /* getXboxUserProfile(userData.xboxUsername)
      .then(profile => {
        setProfileXbox(mapXboxProfile(profile.people, xboxState))
      }) */

    setProfileXbox(mapXboxProfile(XBOXProfile.people, xboxState))
  }, [userData.xboxUsername, xboxState])

  return { ProfileXbox }
}
