const getLastResult = page => {
  const regexLastBalls = /<li class="new ball">\d\d?<\/li>/g //serch for the last balls, and we get the two days
  const regexLastStars = /<li class="new lucky-star">\d\d?<\/li>/g //search for last stars, and we get the two days
  const regexNumbers = /[0-5]?[0-9]/g //search for the numbers in the last strings
  let lastBalls = ''
  let lastStars = ''

  lastBalls = page.match(regexLastBalls).slice(0,5).toString() //we have the two last days (10 balls) we get the 5 first
  lastStars = page.match(regexLastStars).slice(0,2).toString() //we have the two last days (4 stars) we get the 2 first

  return lastBalls.match(regexNumbers).concat(lastStars.match(regexNumbers))
}

const getYearResults = page => {
  const starRegex = /<li class="new lucky-star">\d\d?<\/li>/g
  const ballRegex = /<li class="new ball">\d\d?<\/li>/g
  const numbersRegex = /[0-5]?[0-9]/g
  let balls = ''
  let stars = ''

  balls = page.match(ballRegex).toString()
  stars = page.match(starRegex).toString()

  return [balls.match(numbersRegex),stars.match(numbersRegex)]
}

const getMostNumbers = page => {
  const mostBalls = Array(51).fill(0)
  const mostStars = Array(13).fill(0)
  const [balls, stars] = getYearResults(page)

  balls.forEach(ball => {
    mostBalls[Number(ball)]++
  })

  stars.forEach( star => {
    mostStars[Number(star)]++
  })

  return [mostBalls, mostStars]
}

const getYearsSelect = page => {
  let years = ''

  const regexYearsString =/>\d\d\d\d</g
  const regexYearsNumber = /\d\d\d\d/g

  years = page.match(regexYearsString).toString() //find the years and return '<2020>, <2019>, <2018>, ... <2004>'

  return years.match(regexYearsNumber)
}

module.exports = {getLastResult, getMostNumbers, getYearsSelect}
