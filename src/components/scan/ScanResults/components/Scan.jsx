import { scanLoadingState, scanState } from '@/contexts'

import { useRecoilState } from 'recoil'

import { useScanServices } from '../hooks'

import { GeneralInfoSection } from './GeneralInfoSection'
import { VulnerabilitiesSection } from './VulnerabilitiesSection'

import { ScanButton } from '.'
import { useEffect } from 'react'

export const Scan = () => {
  const [scan,setScan] = useRecoilState(scanState)
  const [scanLoading] = useRecoilState(scanLoadingState)
  const { getScan } = useScanServices()

  useEffect(() => {
    return () => {
      setScan(null)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='flex flex-col gap-10 items-center justify-center'>
      <ScanButton onClick={() => getScan()} loading={scanLoading} />
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
            scanningTime={scan?.scanningTime}
          />

          <VulnerabilitiesSection vulnerabilities={scan?.vulnerabilities} />
        </>
      )}
    </div>
  )
}
