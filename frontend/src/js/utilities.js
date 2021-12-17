const setBallsColumn = (balls, dataChart) => {

  balls.forEach((ball, index) => {
    if (index !== 0) {
      dataChart.push([index.toString(), ball])
    }
  })
}

const setStarsColumn = (stars, dataChart) => {

  stars.forEach((star, index) => {
    if (index !== 0) {
      dataChart.push([index.toString(), star])
    }
  })
}

module.exports = { setBallsColumn, setStarsColumn }
