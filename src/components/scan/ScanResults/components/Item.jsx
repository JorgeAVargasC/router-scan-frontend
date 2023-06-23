import PropTypes from 'prop-types'

export const Item = ({ title = '', content = '', flag = '' }) => {
  return (
    <div className='flex flex-col border rounded-md p-2 border-slate-700 relative'>
      <div className='uppercase font-bold'>{title}</div>
      <div className='text-slate-300 text-justify flex gap-2.5 items-center'>
        {flag !== '' && (
          <img className='w-5 h-5 rounded-full ' src={flag} alt='flag' />
        )}
        <span>{content}</span>
      </div>
    </div>
  )
}

Item.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  flag: PropTypes.string,
}