import { VendorCVEChart } from './vendor.cve.chart'

import { ISPCVEChart, PortCVEChart } from '.'

export const Reports = () => {
  return (
    <div className='grid gap-5'>
      <VendorCVEChart />
      <ISPCVEChart />
      <PortCVEChart />
      {/* <VendorCVEChart /> */}
      {/* <VendorCVEChart /> */}
      {/* <VendorCVEChart /> */}
    </div>
  )
}
