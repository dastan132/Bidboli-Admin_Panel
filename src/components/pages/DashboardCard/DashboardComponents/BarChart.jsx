import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { UserData } from './FakeData/Data'
import { Chart as ChartJS } from 'chart.js/auto'

// const BarChart = ({ chartData }) => {
const BarChart = () => {
  const [userDataGain] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'User Gain',
        data: UserData.map((data) => data.userGain),

        backgroundColor: 'red',
      },
      {
        label: 'User Lost',
        data: UserData.map((data) => data.userLost),

        backgroundColor: ' #FF663E',
      },
    ],
  })

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'black',
          font: {
            size: '13px',
          },
        },
      },
      title: {
        display: 'true',
      },
    },
    scales: {
      y: {
        ticks: {
          color: 'black',
          font: {
            size: '13px',
          },
        },
      },

      x: {
        ticks: {
          color: 'black',
          font: {
            size: '12px',
          },
        },
      },
    },
  }

  return (
    <>
      <div className='dashchart2 shadow-lg '>
        <h6>PERFORMANCE</h6>
        <h4 className='fw-bold m-0'>No. of Events created</h4>
        <Bar data={userDataGain} options={options} />
      </div>
    </>
  )
}

export default BarChart
