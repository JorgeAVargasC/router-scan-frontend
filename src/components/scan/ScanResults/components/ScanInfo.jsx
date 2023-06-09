import { PropTypes } from 'prop-types'

import { Accordion, Tags } from '@/components/general'

import { ScanScoreTags } from './ScanScoreTags'
import { ScanVulnInfo } from './ScanVulnInfo'

export const ScanInfo = ({ vendor = 'unknown', vulnerabilities = [] }) => {
  const sections = vulnerabilities.map((vuln, index) => ({
    title: vuln.id,
    children: <ScanVulnInfo key={index} {...vuln} />,
    tags: [
      <ScanScoreTags key={index} cvss={vuln.cvss} severity={vuln.severity} />,
    ],
    icon: 'info',
  }))

  return (
    <div className='w-full flex flex-col'>
      <h4 className='uppercase'>Results</h4>
      <hr className='pb-4' />

      <div className='w-full flex flex-col gap-4 '>
        <div className='flex flex-col'>
          <h6 className='uppercase'>Vendor</h6>
          <p className='uppercase text-slate-400'>{vendor}</p>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex items-center justify-between'>
            <h6 className='uppercase'>Vulnerabilities</h6>
            <Tags color='sky' message={vulnerabilities.length} />
          </div>

          <div>
            {vulnerabilities.length === 0 ? (
              <p>No vulnerabilities found</p>
            ) : (
              <Accordion sections={sections} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

ScanInfo.propTypes = {
  vendor: PropTypes.string,
  vulnerabilities: PropTypes.array,
}
