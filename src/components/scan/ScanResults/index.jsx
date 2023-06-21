/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'

import { AllScan, Scan, Tabs } from './components'

export const ScanResults = () => {
  const [currentView, setCurrentView] = useState(1)

  return (
    <>
      <Tabs currentView={currentView} setCurrentView={setCurrentView} />

      {currentView === 1 && <Scan />}

      {currentView === 2 && <AllScan />}
    </>
  )
}
