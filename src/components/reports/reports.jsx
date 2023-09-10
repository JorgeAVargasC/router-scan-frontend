import { VendorCVEChart } from './vendor.cve.chart'

import { ISPCVEChart } from '.'

export const Reports = () => {
  return (
    <div className='grid gap-5'>
      <VendorCVEChart />
      <ISPCVEChart />
      {/* <VendorCVEChart /> */}
      {/* <VendorCVEChart /> */}
      {/* <VendorCVEChart /> */}
    </div>
  )
}
