import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { UserData } from './FakeData/Data'
import { Chart as ChartJS } from 'chart.js/auto'

const LineChart = () => {
  const [userDataLost] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'User Lost',
        data: UserData.map((data) => data.userLost),
        backgroundColor: 'grey',
        borderColor: 'darkgrey',
      },
      {
        label: 'User Gain',
        data: UserData.map((data) => data.userGain),
        backgroundColor: 'wheat',
        borderColor: 'white',
      },
    ],
  })
  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
          font: {
            size: '13px',
          },
        },
      },
      title: {
        display: true,
      },
    },
    scales: {
      y: {
        ticks: {
          color: '#ffffff',
          font: {
            size: '13px',
          },
        },
      },

      x: {
        ticks: {
          color: '#ffffff',
          font: {
            size: '12px',
          },
        },
      },
    },
  }

  return (
    <>
      <div className='dashchart  shadow-lg '>
        <h6>OVERVIEW</h6>
        <h4 className='fw-bold m-0'>Total no. of Events</h4>
        <Line data={userDataLost} options={options} />
      </div>
    </>
  )
}

export default LineChart
