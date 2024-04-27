import xboxData from './gameTroffiesExampleXBox.json' assert { type: "json" };

console.log(
    xboxData.achievements.filter(achievement => {
        return achievement.progression.requirements[0]?.current != 0
    })
)
