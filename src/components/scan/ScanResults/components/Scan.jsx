import { scanLoadingState, scanState } from '@/contexts'

import { useRecoilState } from 'recoil'

import { useScanServices } from '../hooks'

import { GeneralInfoSection } from './GeneralInfoSection'
import { VulnerabilitiesSection } from './VulnerabilitiesSection'

import { ScanButton } from '.'

export const Scan = () => {
  const [scan] = useRecoilState(scanState)
  const [scanLoading] = useRecoilState(scanLoadingState)
  const { getScan } = useScanServices()
  return (
    <div className='flex flex-col gap-10 items-center justify-center'>
      <ScanButton onClick={getScan} loading={scanLoading} />
      {scan && !scanLoading && (
        <>
          <GeneralInfoSection
            vendor={scan?.vendor}
            isp={scan?.connection?.isp}
            ip={scan?.ip}
            asn={scan?.connection?.asn}
            city={scan?.city}
            country={scan?.country}
            flag={scan?.flag?.img}
          />

          <VulnerabilitiesSection vulnerabilities={scan?.vulnerabilities} />
        </>
      )}
    </div>
  )
}
