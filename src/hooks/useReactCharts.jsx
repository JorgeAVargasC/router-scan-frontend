import { useEffect } from 'react'

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'

export const useReactCharts = () => {
  useEffect(() => {
    ChartJS.register(
      BarElement,
      CategoryScale,
      Filler,
      Legend,
      LineElement,
      LinearScale,
      PointElement,
      Title,
      Tooltip
    )
  }, [])
}
