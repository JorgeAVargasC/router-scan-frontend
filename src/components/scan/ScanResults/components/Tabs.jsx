import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

export const Tabs = ({ currentView, setCurrentView }) => {
  const {t} = useTranslation()
  return (
    <div className='grid place-items-center'>
      <div className='w-[400px] grid grid-cols-2 place-items-center gap-4 mb-10'>
      <button
        className={`h-12 w-full border px-4 rounded-md ${
          currentView === 1 ? 'border-sky-500 bg-sky-500' : 'bg-transparent'
        }`}
        onClick={() => setCurrentView(1)}
      >
        {t('scan')}
      </button>
      <button
        className={`h-12 w-full border px-4 rounded-md ${
          currentView === 2 ? 'border-sky-500 bg-sky-500' : 'bg-transparent'
        }`}
        onClick={() => setCurrentView(2)}
      >
        {t('allScans')}
      </button>
    </div>
    </div>
    
  )
}

// propTypes
Tabs.propTypes = {
  currentView: PropTypes.number,
  setCurrentView: PropTypes.func,
}
