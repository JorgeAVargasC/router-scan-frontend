import { PropTypes } from 'prop-types'

import { Timer } from '@/components/general'

export const ScanButton = ({ loading, onClick }) => {
  return (
    <div className='relative grid place-items-center w-40 aspect-square'>
      <div
        className={`${
          loading ? 'animate-ping' : ''
        } bg-sky-500 w-28 aspect-square rounded-full`}
      />

      <button
        className='w-full bg-sky-500 absolute z-10 uppercase font-bold text-xl grid place-items-center aspect-square rounded-full'
        disabled={loading}
        onClick={onClick}
      >
        {loading ? (
          <svg
            className='animate-spin h-10 w-10 text-white'
            viewBox='0 0 24 24'
          >
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
          'scan'
        )}
        <div className='absolute bottom-8 text-base'>
          <Timer isActive={loading} />
        </div>
      </button>
    </div>
  )
}

ScanButton.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
}
