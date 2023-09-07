import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import PropTypes from 'prop-types'

import { Accordion } from '@/components/general'

import { ScanScoreTags } from './ScanScoreTags'
import { ScanVulnInfo } from './ScanVulnInfo'

export const Vulnerabilities = ({ vulnerabilities }) => {
  const [sortedVulnerabilities, setSortedVulnerabilities] =
    useState(vulnerabilities)
  const { t } = useTranslation()

  // example vulnerabilities

  // [{cvss: 8.3}, {cvss: 9.3}, {cvss: null}]

  useEffect(() => {
    // Create a copy of the vulnerabilities array before sorting
    const sortedVulnerabilitiesCopy = [...vulnerabilities]
    sortedVulnerabilitiesCopy.sort((a, b) => b.cvss - a.cvss)
    setSortedVulnerabilities(sortedVulnerabilitiesCopy)
  }, [vulnerabilities])

  const sections = sortedVulnerabilities.map((vuln, index) => ({
    title: vuln.id,
    children: <ScanVulnInfo key={index} {...vuln} />,
    tags: [
      <ScanScoreTags key={index} cvss={vuln.cvss} severity={vuln.severity} />,
    ],
    icon: 'info',
  }))

  return (
    <div className='w-full'>
      {vulnerabilities.length === 0 ? (
        <p>{t('noVulnerabilities')}</p>
      ) : (
        <Accordion sections={sections} />
      )}
    </div>
  )
}

Vulnerabilities.propTypes = {
  vulnerabilities: PropTypes.array,
}
