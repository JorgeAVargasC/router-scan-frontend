import { allScansState, scanLoadingState, scanState } from '@/contexts'

import { useRecoilState } from 'recoil'

import { convertDate } from '@/utils'

import { serviceGetAllScans, serviceGetScan } from '@/services'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'




export const useScanServices = () => {
  const [, setScan] = useRecoilState(scanState)
  const [, setAllScans] = useRecoilState(allScansState)
  const [, setScanLoading] = useRecoilState(scanLoadingState)
  const [loadingAllScans, setLoadingAllScans] = useState(false)

  const {t} = useTranslation()

  const getScan = () => {
    setScanLoading(true)
    serviceGetScan()
      .then((data) => {
        const preparedData = {
          ...data,
          vulnerabilities: data.vulnerabilities
            .map((vuln) => ({
              ...vuln,
              modified: convertDate(vuln?.modified, 'DD/MM/YYYY'),
              published: convertDate(vuln?.published, 'DD/MM/YYYY'),
            }))
            .sort((a, b) => b.cvss - a.cvss),
        }
        setScan(preparedData)
        toast.success(t('success'))
      })
      .catch((error) => {
        console.log(error)
        toast.error(t('error'))
      })
      .finally(() => {
        setScanLoading(false)
      })
  }

  const getAllScans = () => {
    setLoadingAllScans(true)
    serviceGetAllScans()
      .then((data) => {
        setAllScans(data)
        toast.success(t('success'))
      })
      .catch((error) => {
        console.log(error)
        toast.error(t('error'))
      })
      .finally(() => {
        setLoadingAllScans(false)
      })
  }

  return {
    getScan,
    getAllScans,
    loadingAllScans,
  }
}
