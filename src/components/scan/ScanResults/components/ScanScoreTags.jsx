import { PropTypes } from 'prop-types'

import { Tags } from '@/components/general'
import { useTranslation } from 'react-i18next'

// if cvss == 0.0:
//         return 'NONE'
//     elif 0.1 <= cvss <= 3.9:
//         return 'LOW'
//     elif 4 <= cvss <= 6.9:
//         return 'MEDIUM'
//     elif 7 <= cvss <= 8.9:
//         return 'HIGH'
//     elif cvss >= 9:
//         return 'CRITICAL'

export const ScanScoreTags = ({ cvss = 0.0, severity = 'NONE' }) => {
  const {t} = useTranslation()
  return (
    <Tags
      color={
        cvss === 0.0
          ? 'gray'
          : cvss >= 0.1 && cvss <= 3.9
          ? 'sky'
          : cvss >= 4 && cvss <= 6.9
          ? 'yellow'
          : cvss >= 7 && cvss <= 8.9
          ? 'orange'
          : 'gray'
      }
      message={t(severity)}
    />
  )
}

ScanScoreTags.propTypes = {
  cvss: PropTypes.number,
  severity: PropTypes.string,
}
