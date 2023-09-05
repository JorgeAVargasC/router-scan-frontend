import { PropTypes } from 'prop-types'

export const Tags = ({ color = 'info', message = 'tag' }) => {
  const colors = {
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    sky: 'bg-sky-500',
    indigo: 'bg-indigo-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    gray: 'bg-gray-500',
  }

  return <span className={`${colors[color]} min-w-[40px] text-center truncate overflow-ellipsis max-w-[100px] md:max-w-none text-sm px-2 py-0.5 rounded-md font-medium uppercase`}>{message}</span>
}

Tags.propTypes = {
  color: PropTypes.string,
  message: PropTypes.string,
}
