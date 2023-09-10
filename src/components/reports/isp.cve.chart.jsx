import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

import { getReportsISPCVE } from '@/services'

export const ISPCVEChart = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [chartData, setChartData] = useState(null)

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
        text: 'Fabricantes vs Vulnerabilidades',
        color: '#fff',
      },
    },
    scales: {
      yAxes: {
        grid: {
          drawBorder: true,
          color: '#FFFFFF',
        },
        ticks: {
          // beginAtZero: true,
          color: 'white',
          fontSize: 14,
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
          color: '#FFFFFF',
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
    getReportsISPCVE()
      .then((res) => {
        setData(res.data)
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
      console.log(data)
      setChartData({
        labels: data
          .filter(
            (item) =>
              item.cve_critical > 0 ||
              item.cve_high > 0 ||
              item.cve_medium > 0 ||
              item.cve_low > 0 ||
              item.cve_none > 0
          )
          ?.map((item) => item._id),
        datasets: [
          {
            label: 'Críticas',
            data: data?.map((item) => item.cve_critical),
            backgroundColor: '#dc2626',
            borderColor: '#dc2626',
          },
          {
            label: 'Altas',
            data: data?.map((item) => item.cve_high),
            backgroundColor: '#ea580c',
            borderColor: '#ea580c',
          },
          {
            label: 'Medias',
            data: data?.map((item) => item.cve_medium),
            backgroundColor: '#eab308',
            borderColor: '#eab308',
          },
          {
            label: 'Bajas',
            data: data?.map((item) => item.cve_low),
            backgroundColor: '#0ea5e9',
            borderColor: '#0ea5e9',
          },
          {
            label: 'Desconocidas',
            data: data?.map((item) => item.cve_none),
            backgroundColor: '#4b5563',
            borderColor: '#4b5563',
          },
        ],
      })
    }
  }, [data, error, loading])

  useEffect(() => {
    console.log(chartData)
  }, [chartData])

  return (
    <div className='grid place-items-center p-5 border rounded-lg min-h-[600px]'>
      {!!error && <p>{error}</p>}
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
        <>{chartData && <Bar options={options} data={chartData} />}</>
      )}
    </div>
  )
}
