import { allScansState, scanLoadingState, scanState } from '@/contexts'
import { userState } from '@/contexts/auth.context'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { useRecoilState } from 'recoil'

import { convertDate } from '@/utils'

import {
  serviceFilterScans,
  serviceGetAllScans,
  serviceGetScan,
} from '@/services'

export const useScanServices = () => {
  const [, setScan] = useRecoilState(scanState)
  const [, setAllScans] = useRecoilState(allScansState)
  const [, setScanLoading] = useRecoilState(scanLoadingState)
  const [user] = useRecoilState(userState)
  const [loadingAllScans, setLoadingAllScans] = useState(false)

  const { t } = useTranslation()

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

    if (user.role === 'ISP') {
      serviceFilterScans({
        asn: user.asn,
      })
        .then((data) => {
          setAllScans(data.data)
          toast.success(t('success'))
        })
        .catch((error) => {
          console.log(error)
          toast.error(t('error'))
        })
        .finally(() => {
          setLoadingAllScans(false)
        })
    } else if (user.role === 'ADMIN') {
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
  }

  return {
    getScan,
    getAllScans,
    loadingAllScans,
  }
}
