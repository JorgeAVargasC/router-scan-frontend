import { scanLoadingState, scanState } from '@/contexts'

import { useRecoilState } from 'recoil'

import { convertDate } from '@/utils'

import { serviceGetScan } from '@/services'

export const useScanServices = () => {
  const [, setScan] = useRecoilState(scanState)
  const [, setScanLoading] = useRecoilState(scanLoadingState)

  const getScan = () => {
    setScanLoading(true)
    setTimeout(() => { 
      serviceGetScan()
        .then((data) => {
          const preparedData = {
            ...data,
            vulnerabilities: data.vulnerabilities.map((vuln) => ({
              ...vuln,
              modified: convertDate(vuln?.modified, 'DD/MM/YYYY'),
              published: convertDate(vuln?.published, 'DD/MM/YYYY'),
            })
            ).sort((a, b) => b.cvss - a.cvss),
          }
          setScan(preparedData)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          setScanLoading(false)
        })
    }, 5000)
  }

  return {
    getScan,
  }
}
