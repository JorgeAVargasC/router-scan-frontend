/* eslint-disable react-hooks/exhaustive-deps */
import { allScansState, scanLoadingState } from '@/contexts'

import { useEffect } from 'react'

import { useRecoilState } from 'recoil'

import { Loading } from '@/components/general'

import { useScanServices } from '../hooks'

import { ScanScoreTags } from './ScanScoreTags'

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
              className='w-full flex flex-col items-start border p-2 gap-3 rounded-md'
              key={index}
            >
              <img
                className='w-8 h-8 rounded-full'
                src={scan.flag.img}
                alt=''
              />
              <span>{scan.vendor}</span>
              <span>{scan.connection.isp}</span>
              <div className='flex flex-col gap-2'>
                {scan.vulnerabilities.map((vulnerability, index) => (
                  <div
                    className='flex items-center border border-slate-700 rounded-md p-2 gap-2'
                    key={index}
                  >
                    <span className='w-36 border-r'>{vulnerability.cve}</span>
                    <div className='flex-1'>
                      <ScanScoreTags
                        cvss={vulnerability.cvss}
                        severity={vulnerability.severity}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
