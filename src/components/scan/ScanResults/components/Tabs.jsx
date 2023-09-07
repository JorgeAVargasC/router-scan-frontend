import { useTranslation } from 'react-i18next'

import PropTypes from 'prop-types'

export const Tabs = ({ currentView, setCurrentView }) => {
  const { t } = useTranslation()
  return (
    <div className='w-max flex gap-4'>
      <button
        className={`h-12 border px-4 rounded-md ${
          currentView === 1 ? 'border-sky-500 bg-sky-500' : 'bg-transparent'
        }`}
        onClick={() => setCurrentView(1)}
      >
        {t('scan')}
      </button>
      <button
        className={`h-12 border px-4 rounded-md ${
          currentView === 2 ? 'border-sky-500 bg-sky-500' : 'bg-transparent'
        }`}
        onClick={() => setCurrentView(2)}
      >
        {t('allScans')}
      </button>
    </div>
  )
}

// propTypes
Tabs.propTypes = {
  currentView: PropTypes.number,
  setCurrentView: PropTypes.func,
}
