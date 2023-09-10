import { CVEChart } from './cve.chart'
import { ISPChart } from './isp.chart'
import { VendorChart } from './vendor.chart'
import { VendorCVEChart } from './vendor.cve.chart'

import { ISPCVEChart, PortCVEChart } from '.'
import { IPChart } from './ip.chart'

export const Reports = () => {
  return (
    <div className='grid gap-5'>
      <VendorCVEChart />
      <ISPCVEChart />
      <PortCVEChart />

      <CVEChart />
      <ISPChart />
      <VendorChart />
      <IPChart />
    </div>
  )
}
