const verifyPosition = (arr, coord, direct) => {
  if (direct === 'R') {
    return (
      arr[coord + 1]
        ? ++coord
        : 0
    )
  }

  return (
    arr[coord - 1]
      ? --coord
      : arr.length - 1
  )
}

const RobotSimulator = (coord, orders) => {
  const signs = [1, 1, -1, -1]
  let parsedCoord = 1; let pivot = 0

  orders
    .split('')
    .forEach((order) => {
      switch (order) {
        case 'L':
          pivot = verifyPosition(signs, pivot, order)
          parsedCoord = parsedCoord === 0 ? 1 : 0
          break
        case 'R':
          pivot = verifyPosition(signs, pivot, order)
          parsedCoord = parsedCoord === 0 ? 1 : 0
          break
        case 'A':
          coord[parsedCoord] += signs[pivot]
          break
        default:
          throw Error('WTF')
      }
    })
  return coord
}

// console.log(RobotSimulator([0, 0], 'RAALAL'))
