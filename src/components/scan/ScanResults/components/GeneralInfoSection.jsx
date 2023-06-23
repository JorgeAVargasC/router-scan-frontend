import PropTypes from 'prop-types'
import { Item } from './Item'

export const GeneralInfoSection = ({
  isp = '',
  ip = '',
  asn = '',
  city = '',
  country = '',
  flag = '',
  vendor = '',
}) => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <h6 className='uppercase mb-2'>General Info</h6>

      <Item title='ISP' content={isp} />
      <Item title='Vendor' content={vendor} />

      <div className='grid grid-cols-2 gap-2'>
        <Item title='IP' content={ip} />
        <Item title='ASN' content={asn} />
      </div>

      <Item
        title='Location'
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
