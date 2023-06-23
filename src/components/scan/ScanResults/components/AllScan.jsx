/* eslint-disable react-hooks/exhaustive-deps */
import { allScansState, scanLoadingState } from '@/contexts'

import { useEffect } from 'react'

import { useRecoilState } from 'recoil'

import { Loading } from '@/components/general'

import { useScanServices } from '../hooks'

import { GeneralInfoSection } from './GeneralInfoSection'
import { VulnerabilitiesSection } from './VulnerabilitiesSection'

export const AllScan = () => {
  const [allScans] = useRecoilState(allScansState)
  const [scanLoading] = useRecoilState(scanLoadingState)
  const { getAllScans } = useScanServices()

  useEffect(() => {
    getAllScans()
  }, [])

  return (
    <div className='flex flex-col items-center'>
      {scanLoading ? (
        <Loading />
      ) : (
        <div className='w-full flex flex-col gap-4'>
          {allScans?.map((scan, index) => (
            <div
              className='w-full flex flex-col items-start border p-4 gap-8 rounded-md'
              key={index}
            >
              <GeneralInfoSection
                vendor={scan?.vendor}
                isp={scan?.connection?.isp}
                ip={scan?.ip}
                asn={scan?.connection?.asn}
                city={scan?.city}
                country={scan?.country}
                flag={scan?.flag?.img}
              />

              {/* <hr className='border w-full border-slate-800' /> */}

              <VulnerabilitiesSection vulnerabilities={scan?.vulnerabilities} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
