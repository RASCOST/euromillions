import React, { useEffect, useState } from 'react'
import NumbersChart from './NumbersChart'

import axios from 'axios'
import { setBallsColumn, setStarsColumn } from '../../js/utilities'

export default props => {
  const [isYearSelected, setYearSelect] = useState(false)
  const [yearsSelected, setYearsSelected] = useState([])
  const [balls, setBalls] = useState([])
  const [stars, setStars] = useState([])

  let year = 0

  useEffect(() => {
    axios.get('http://localhost:3000/yearsSelected')
      .then(response => {
        setYearsSelected(response.data)
      })
      .catch(err => console.log(err))
  },[])

  const setSelect = () => {
    if (yearsSelected.length > 0) {
      return yearsSelected.map((year, index) => <option key={index} value={year}>{year}</option>)
    } else {
      return <option value='' />
    }
  }

  const renderChatrs = () => {
    if (isYearSelected) {
      return (
        <div>
          <h2>{`${year}`}</h2>
          <NumbersChart width={600} height={200}
            data={balls}
            title={`Number of ${year}`}
            titleX='Number balls'
            titleY='Number of times of the balls numbers' />
          <NumbersChart width={600} height={200}
            data={stars}
            title={`Number of ${year}`}
            titleX='Number stars'
            titleY='Number of times of the stars numbers' />
        </div>
      )
    } else {
      return (
        <div>
          <span>Choose the year you want to analyze.</span>
        </div>
      )
    }
  }

  const handleChange = evt => {
    year = evt.target.value

    axios.get(`http://localhost:3000/yearResults/${year}`)
      .then(response => {
        const dataChartBall = [['Balls', 'Times']]
        const dataChartStar = [['Stars', 'Times']]
        setBallsColumn(response.data[0], dataChartBall) // load the balls
        setStarsColumn(response.data[1], dataChartStar) // load the stars
        setBalls(dataChartBall)
        setStars(dataChartStar)
        setYearSelect(true) // now we can render the charts
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center '>
      {renderChatrs()}
      <div className='mt-5 '>
        <label>Choose the year:</label>
          <select className='ml-2' id='yearsSelect' onChange={handleChange}>
            {setSelect(yearsSelected)}
          </select>
      </div>
    </div>
  )
}
