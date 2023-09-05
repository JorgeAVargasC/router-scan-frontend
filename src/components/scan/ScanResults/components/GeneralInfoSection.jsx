import { useTranslation } from 'react-i18next'

import PropTypes from 'prop-types'

import { Item } from './Item'

export const GeneralInfoSection = ({
  isp = '',
  // ip = '',
  asn = '',
  city = '',
  country = '',
  flag = '',
  vendor = '',
  scanningTime,
}) => {
  const { t } = useTranslation()

  const convertSecondsToMinutesAndSeconds = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}m ${remainingSeconds.toFixed(0)}s`
  }

  return (
    <div className='w-full flex flex-col gap-2'>
      <h6 className='uppercase mb-2'>{t('generalInfo')}</h6>

      <Item title={`${t('isp')}`} content={isp} />
      <Item title={`${t('vendor')}`} content={vendor} />

      <div className='flex gap-2'>
        {/* <Item title={`${t('ip')}`} content={ip} /> */}
        {scanningTime && (
          <div className='w-full'>
            <Item title={`${t('scanningTime')}`} content={convertSecondsToMinutesAndSeconds(scanningTime)} />
          </div>
        )}
        <div className='w-full'>
          <Item title={`${t('asn')}`} content={asn} />
        </div>
      </div>

      <Item
        title={`${t('location')}`}
        content={`${city}, ${country}`}
        flag={flag}
      />
    </div>
  )
}

GeneralInfoSection.propTypes = {
  isp: PropTypes.string,
  ip: PropTypes.string,
  asn: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  flag: PropTypes.string,
  vendor: PropTypes.string,
  scanningTime: PropTypes.number,
}
