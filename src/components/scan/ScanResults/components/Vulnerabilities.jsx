import { Accordion } from '@/components/general'
import PropTypes from 'prop-types'
import { ScanScoreTags } from './ScanScoreTags'
import { ScanVulnInfo } from './ScanVulnInfo'
import { useTranslation } from 'react-i18next'

export const Vulnerabilities = ({ vulnerabilities }) => {
  const sections = vulnerabilities.map((vuln, index) => ({
    title: vuln.id,
    children: <ScanVulnInfo key={index} {...vuln} />,
    tags: [
      <ScanScoreTags key={index} cvss={vuln.cvss} severity={vuln.severity} />,
    ],
    icon: 'info',
  }))

  const {t} = useTranslation()

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
