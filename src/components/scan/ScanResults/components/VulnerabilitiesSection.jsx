import { Tags } from '@/components/general'

import { Vulnerabilities } from './Vulnerabilities'

import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

export const VulnerabilitiesSection = ({
  vulnerabilities = [],
}) => {
  const {t} = useTranslation()
  return (
    <div className='w-full flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <h6 className='uppercase mb-2'>{t('vulnerabilities')}</h6>
        <Tags
            color={
             vulnerabilities.length === 0
                ? 'green'
                :vulnerabilities.length <= 10
                ? 'yellow'
                :vulnerabilities.length <= 20
                ? 'orange'
                : 'red'
            }
            message={vulnerabilities.length.toString()}
          />
      </div>

      <Vulnerabilities vulnerabilities={vulnerabilities} />
    </div>
  )
}

VulnerabilitiesSection.propTypes = {
  vulnerabilities: PropTypes.array,
}
