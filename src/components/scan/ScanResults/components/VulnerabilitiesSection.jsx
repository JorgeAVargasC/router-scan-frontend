import { Tags } from '@/components/general'

import { Vulnerabilities } from './Vulnerabilities'

import PropTypes from 'prop-types'

export const VulnerabilitiesSection = ({
  vulnerabilities = [],
}) => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <h6 className='uppercase mb-2'>Vulnerabilities</h6>
        <Tags color='sky' message={vulnerabilities.length.toString()} />
      </div>

      <Vulnerabilities vulnerabilities={vulnerabilities} />
    </div>
  )
}

VulnerabilitiesSection.propTypes = {
  vulnerabilities: PropTypes.array,
}
