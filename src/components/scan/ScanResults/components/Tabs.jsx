import PropTypes from 'prop-types'

export const Tabs = ({ currentView, setCurrentView }) => {
  return (
    <div className='flex items-center justify-center gap-4 mb-10'>
      <button
        className={`h-12 w-[120px] border px-4 rounded-md ${
          currentView === 1 ? 'border-sky-500 bg-sky-500' : 'bg-transparent'
        }`}
        onClick={() => setCurrentView(1)}
      >
        Scan
      </button>
      <button
        className={`h-12 w-[120px] border px-4 rounded-md ${
          currentView === 2 ? 'border-sky-500 bg-sky-500' : 'bg-transparent'
        }`}
        onClick={() => setCurrentView(2)}
      >
        All Scans
      </button>
    </div>
  )
}

// propTypes
Tabs.propTypes = {
  currentView: PropTypes.number,
  setCurrentView: PropTypes.func,
}
