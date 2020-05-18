import React from 'react'
import { Chart } from 'react-google-charts'

export default props => {
  return (
    <Chart
      width={props.width}
      height={props.height}
      chartType='Bar'
      loader={<div>Loading Chart</div>}
      data={
        props.data
      }
      options={{
        title: props.title,
        chartArea: { width: '30%' },
        hAxis: {
          title: props.titleX,
          minValue: 0
        },
        vAxis: {
          title: props.titleY
        }
      }}
      legendToggle
    />
  )
}
