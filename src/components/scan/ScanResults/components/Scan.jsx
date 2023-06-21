import { scanLoadingState, scanState } from '@/contexts'

import { useRecoilState } from 'recoil'

import { ScanButton, ScanInfo } from '.'

import { useScanServices } from '../hooks'

export const Scan = () => {
  const [scan] = useRecoilState(scanState)
  const [scanLoading] = useRecoilState(scanLoadingState)
  const { getScan } = useScanServices()
  return (
    <div className='flex flex-col gap-10 items-center justify-center'>
      <ScanButton onClick={getScan} loading={scanLoading} />
      {scan && !scanLoading && (
        <ScanInfo
          vendor={scan?.vendor}
          vulnerabilities={scan?.vulnerabilities}
        />
      )}
    </div>
  )
}
