import { PropTypes } from 'prop-types'

import { Accordion, Tags } from '@/components/general'
import React from 'react'

export const ScanVulnInfo = ({
  cve = 'CVE-0000-0000',
  // id = 'CVE-0000-0000',
  port = 0,
  cvss = 0.0,
  severity = 'NONE',
  summary = 'No summary available',
  modified = '2021-01-01T00:00:00.000',
  published = '2021-01-01T00:00:00.000',
  recommendations = [],
}) => {
  const items = [
    { title: 'CVE', content: cve },
    // { title: 'ID', content: id },
    { title: 'Port', content: port },
    { title: 'CVSS', content: cvss },
    { title: 'Severity', content: severity },
    { title: 'Summary', content: summary },
    { title: 'Modified', content: modified },
    { title: 'Published', content: published },
    { title: 'Recommendations', content: recommendations },
  ]

  const sections = recommendations.map((recommendation, index) => ({
    title: `${index + 1}. ${recommendation.name}`,
    children: (
      <div key={index} className='flex flex-col gap-2 text-justify'>
        <div className='flex flex-col gap-1'>
          <h6 className='uppercase'>Prerequisites</h6>
          <p className='text-slate-400'>{recommendation.prerequisites}</p>
        </div>

        <div className='flex flex-col gap-1'>
          <h6 className='uppercase'>Summary</h6>
          <p className='text-slate-400'>{recommendation.summary}</p>
        </div>

        <div className='flex flex-col gap-1'>
          <h6 className='uppercase'>Solutions</h6>
          <p className='text-slate-400'>{recommendation.solutions}</p>
        </div>
      </div>
    ),
    icon: 'book',
  }))

  return (
    <div className='grid grid-cols-2 gap-x-5 gap-y-8'>
      {items.map((item, index) => (
        <React.Fragment key={index}  >
          {item.title === 'Recommendations' ? (
            <div className='flex flex-col gap-4 col-span-2'>
              <div className=' flex items-center justify-between'>
                <div className='uppercase font-bold'>{item.title}</div>
                <Tags color='sky' message={item.content.length.toString()} />
              </div>
              <div className=''>
                <Accordion sections={sections} />
              </div>
            </div>
          ) : (
            <div
              key={index}
              className={`${
                item.title === 'Summary' ? 'col-span-2' : ''
              } flex flex-col border-b pb-2 border-slate-700`}
            >
              <div className='uppercase font-bold'>{item.title}</div>
              <div className='text-slate-300 text-justify'>{item.content}</div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

ScanVulnInfo.propTypes = {
  cve: PropTypes.string,
  id: PropTypes.string,
  port: PropTypes.number,
  cvss: PropTypes.number,
  severity: PropTypes.string,
  summary: PropTypes.string,
  modified: PropTypes.string,
  published: PropTypes.string,
  recommendations: PropTypes.array,
}
