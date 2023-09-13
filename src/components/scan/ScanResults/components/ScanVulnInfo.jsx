import React from 'react'
import { useTranslation } from 'react-i18next'

import { PropTypes } from 'prop-types'

import { convertDate } from '@/utils'

import { Accordion, Tags } from '@/components/general'

export const ScanVulnInfo = ({
  cve,
  // id = 'CVE-0000-0000',
  port,
  cvss,
  severity,
  summary,
  modified,
  published,
  recommendations = [],
}) => {
  const { t } = useTranslation()

  const items = [
    { title: 'cve', content: cve },
    // { title: 'ID', content: id },
    { title: 'port', content: port },
    { title: 'cvss', content: cvss },
    { title: 'severity', content: t(severity) },
    { title: 'summary', content: t(summary) },
    { title: 'modified', content: convertDate(modified, 'date time') },
    { title: 'published', content: convertDate(published, 'date time') },
    { title: 'recommendations', content: recommendations },
  ]

  const sections = recommendations?.map((recommendation, index) => ({
    title: `${index + 1}. ${t(recommendation.name)}`,
    children: (
      <div key={index} className='flex flex-col gap-2 text-justify'>
        <div className='flex flex-col gap-1'>
          <h6 className='uppercase'>{t('prerequisites')}</h6>
          <p className='text-slate-400'>{recommendation.prerequisites}</p>
        </div>

        <div className='flex flex-col gap-1'>
          <h6 className='uppercase'>{t('summary')}</h6>
          <p className='text-slate-400'>{recommendation.summary}</p>
        </div>

        <div className='flex flex-col gap-1'>
          <h6 className='uppercase'>{t('solutions')}</h6>
          <p className='text-slate-400'>{recommendation.solutions}</p>
        </div>
      </div>
    ),
    icon: 'book',
  }))

  return (
    <div className='grid grid-cols-2 gap-x-5 gap-y-8'>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {t(item.title) === 'Recommendations' ||
          t(item.title) === 'Recomendaciones' ? (
            <div className='flex flex-col gap-4 col-span-2'>
              <div className=' flex items-center justify-between'>
                <div className='uppercase font-bold'>{t(item.title)}</div>
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
                t(item.title) === 'Summary' || t(item.title) === 'Resúmen'
                  ? 'col-span-2'
                  : ''
              } flex flex-col border-b pb-2 border-slate-700`}
            >
              <div className='uppercase font-bold'>{t(item.title)}</div>
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
  // id: PropTypes.string,
  port: PropTypes.number,
  cvss: PropTypes.number,
  severity: PropTypes.string,
  summary: PropTypes.string,
  modified: PropTypes.string,
  published: PropTypes.string,
  recommendations: PropTypes.array,
}
