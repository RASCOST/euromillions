import React, { useEffect, useState } from 'react'
import axios from 'axios'

import LastResult from './LastResult'
import NumbersChart from './NumbersChart'

export default props => {
  const difDay = [2, 3, 0, 1, 2, 0, 1]

  const [lastNumbers, setLastNumbers] = useState([])
  const [mostBalls, setMostBalls] = useState([])
  const [mostStars, setMostStars] = useState([])

  const dateToString = (day, today, month, year, time) => {
    let lastDay = ''
    let dayToString = ''
    const monthToString = month < 10 ? `0${month + 1}` : `${month + 1}` // add a zero before if the month number is less than 10 (october)

    if (day === 2 || day === 5) {
      if ((time.hour - 1) > 21 && time.minutes > 0) {
        dayToString = today < 10 ? `0${today - difDay[day]}` : `${today - difDay[day]}`
      } else {
        dayToString = today < 10 ? `0${today - difDay[day - 1]}` : `${today - difDay[day]}`
      }
    } else {
      dayToString = today < 10 ? `0${today - difDay[day]}` : `${today - difDay[day]}`
    }

    lastDay = `${dayToString}-${monthToString}-${year}`

    return lastDay
  }

  const getLastDay = () => {
    const date = new Date()
    const time = {
      hour: date.getHours(),
      minutes: date.getMinutes()
    }
    const lastDay = dateToString(date.getDay(), date.getDate(), date.getMonth(), date.getFullYear(), time)

    return lastDay
  }

  const getYear = () => {
    const date = new Date()

    return date.getFullYear()
  }

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

  useEffect (() => {
    axios.get(`http://localhost:3000/lastResult`)
      .then(res => {
        setLastNumbers(res.data)
      })
      .catch(error => console.log(error))

    axios.get(`http://localhost:3000/yearResults/2020`)
    .then(response => {
      const [balls, stars] = response.data
      const dataChartBall = [['Balls','Times']]
      const dataChartStar = [['Stars','Times']]

      setBallsColumn(balls, dataChartBall)
      setStarsColumn(stars, dataChartStar)
      setMostBalls(dataChartBall)
      setMostStars(dataChartStar)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h2>Dashboard</h2>
      <hr />
      <LastResult lastDay={getLastDay()} lastNumbers={lastNumbers} />
      <div className='year-numbers'>
        <h2 className='text-center mt-2'>Numbers of {getYear()}</h2>
        <div className='chart-container'>
          <NumbersChart width={600} height={200} data={mostBalls} title='Most Numbers of 2020' titleX='Number balls' titleY='Number of times of the balls numbers' />
          <NumbersChart width={500} height={200} data={mostStars} title='Most Numbers of 2020' titleX='Number balls' titleY='Number of times of the balls numbers' />
        </div>
      </div>
    </div>
  )
}
