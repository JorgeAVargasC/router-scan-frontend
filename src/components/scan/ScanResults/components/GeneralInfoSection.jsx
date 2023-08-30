import PropTypes from 'prop-types'
import { Item } from './Item'
import { useTranslation } from 'react-i18next'

export const GeneralInfoSection = ({
  isp = '',
  // ip = '',
  asn = '',
  city = '',
  country = '',
  flag = '',
  vendor = '',
}) => {

  const {t} = useTranslation()
  return (
    <div className='w-full flex flex-col gap-2'>
      <h6 className='uppercase mb-2'>
        {t('generalInfo')}
      </h6>

      <Item title={`${t('isp')}`} content={isp} />
      <Item title={`${t('vendor')}`} content={vendor} />

      <div className='grid gap-2'>
        {/* <Item title={`${t('ip')}`} content={ip} /> */}
        <Item title={`${t('asn')}`} content={asn} />
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
}
