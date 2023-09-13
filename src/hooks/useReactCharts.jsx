import { useEffect } from 'react'

import {
  ArcElement,
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
      ArcElement,
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
