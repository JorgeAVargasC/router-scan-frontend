import { useEffect, useState } from 'react'
import { Chart } from 'react-chartjs-2'

import { getReportsIPScanningTime } from '@/services'

export const IPScanningTimeChart = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [chartData, setChartData] = useState(null)
  const [count, setCount] = useState(0)
  const [avg, setAvg] = useState(0)

  const options = {
    responsive: true,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff',
        },
      },
      title: {
        display: true,
        text: 'Tiempo de escaneo',
        color: '#fff',
      },
    },
    scales: {
      yAxes: {
        grid: {
          drawBorder: true,
          color: '#4b5563',
        },
        ticks: {
          // beginAtZero: true,
          color: 'white',
          fontSize: 14,
          stepSize: 1,
        },
      },
      y: {
        ticks: {
          display: false,
          beginAtZero: true,
        },
        // to remove the y-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      xAxes: {
        grid: {
          drawBorder: true,
          color: '#4b5563',
        },
        ticks: {
          // beginAtZero: true,
          color: 'white',
          fontSize: 14,
        },
      },
      x: {
        ticks: {
          display: false,
          beginAtZero: true,
        },
        // to remove the y-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  }

  useEffect(() => {
    getReportsIPScanningTime()
      .then((res) => {
        setData(res.data)
        setCount(res.count)
        setAvg(res.avg)
        setError(null)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (loading === false && error === null && data.length > 0) {
      console.log(data?.map((item) => item._id))
      setChartData({
        labels: data?.map((item) => item._id),
        datasets: [
          {
            type: 'line',
            label: 'Tiempo promedio de Escaneo',
            data: new Array(data.length).fill(avg),
            backgroundColor: '#FFFFFF',
            borderColor: '#FFFFFF',
          },
          {
            type: 'bar',
            label: 'Tiempo de Escaneo',
            data: data?.map((item) => item.scanning_time),
            backgroundColor: '#0ea5e9',
            borderColor: '#0ea5e9',
          },
        ],
      })
    }
  }, [data, error, loading, avg])

  useEffect(() => {
    console.log(chartData)
  }, [chartData])

  return (
    <div className='grid place-items-center p-5 border rounded-lg min-h-[600px]'>
      {loading ? (
        <svg className='animate-spin h-10 w-10 text-white' viewBox='0 0 24 24'>
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          />
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
          />
        </svg>
      ) : (
        <>
          {chartData ? (
            <div className='flex flex-col h-full w-full'>
              <p>{`IP Registradas: ${count}`}</p>
              <div className='grid h-full w-full'>
                <Chart type='bar' options={options} data={chartData} />
              </div>
            </div>
          ) : (
            <p>{`${error}`}</p>
          )}
        </>
      )}
    </div>
  )
}
