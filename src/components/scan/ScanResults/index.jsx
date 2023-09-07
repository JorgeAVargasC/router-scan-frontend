/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'

import { AllScan, Scan, Tabs } from './components'

export const ScanResults = () => {
  const [currentView, setCurrentView] = useState(1)

  return (
    <>
      <p className='mb-4'>Vistas</p>
      <div className='w-full self-start overflow-x-auto pb-4 mb-4'>
        <Tabs currentView={currentView} setCurrentView={setCurrentView} />
      </div>

      {currentView === 1 && <Scan />}

      {currentView === 2 && <AllScan />}
    </>
  )
}
