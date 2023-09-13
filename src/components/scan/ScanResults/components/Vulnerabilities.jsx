import { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff',
        },
      },
      title: {
        display: true,
        text: 'Vulnerabilidades',
        color: '#fff',
      },
    },
  }

  const dataInfo = [
    {
      count: vulnerabilities.filter((vuln) => vuln.severity === 'CRITICAL')
        .length,
      severity: 'CRITICAL',
      color: '#dc2626',
    },
    {
      count: vulnerabilities.filter((vuln) => vuln.severity === 'HIGH').length,
      severity: 'HIGH',
      color: '#ea580c',
    },
    {
      count: vulnerabilities.filter((vuln) => vuln.severity === 'MEDIUM')
        .length,
      severity: 'MEDIUM',
      color: '#eab308',
    },
    {
      count: vulnerabilities.filter((vuln) => vuln.severity === 'LOW').length,
      severity: 'LOW',
      color: '#0ea5e9',
    },
    {
      count: vulnerabilities.filter((vuln) => vuln.severity === 'None').length,
      severity: 'None',
      color: '#4b5563',
    },
  ].sort((a, b) => b.count - a.count)

  const data = {
    labels: dataInfo.map((item) => t(item.severity)),
    datasets: [
      {
        label: '# de Vulnerabilidades',
        data: dataInfo.map((item) => item.count),
        backgroundColor: dataInfo.map((item) => item.color),
        borderColor: dataInfo.map((item) => item.color),
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className='w-full'>
      {vulnerabilities.length === 0 ? (
        <p>{t('noVulnerabilities')}</p>
      ) : (
        <>
          <div className='grid place-items-center max-h-[350px] h-[350px] border mb-5 p-5 rounded-md'>
            <Pie options={options} data={data} />
          </div>

          <Accordion sections={sections} />
        </>
      )}
    </div>
  )
}

Vulnerabilities.propTypes = {
  vulnerabilities: PropTypes.array,
}
