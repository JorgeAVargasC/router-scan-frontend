/* eslint-disable react-hooks/exhaustive-deps */
import { allScansState } from '@/contexts'

import { useEffect } from 'react'

import PropTypes from 'prop-types'
import { useRecoilState } from 'recoil'

import { Accordion, Loading, Tags } from '@/components/general'

import { useScanServices } from '../hooks'

import { GeneralInfoSection } from './GeneralInfoSection'
import { VulnerabilitiesSection } from './VulnerabilitiesSection'
import { useTranslation } from 'react-i18next'

export const AllScan = () => {
  const [allScans, setScans] = useRecoilState(allScansState)
  const { getAllScans,loadingAllScans } = useScanServices()

  useEffect(() => {
    getAllScans()

    return () => {
      setScans(null)
    }
  }, [])

  const {t} = useTranslation()

  const sections = allScans?.map((scan, index) => ({
    title: scan.vendor,
    children: <ResumeSection key={index} scan={scan} />,
    tags: [
      <Tags 
        key={index}
        color='gray'
        message={scan?.connection?.isp.toString()}
      />,
      <Tags
        key={index}
        color='sky'
        message={scan?.vulnerabilities.length.toString()}
      />,
    ],
    icon: 'router',
  }))

  return (
    <div className='flex flex-col items-center pb-60'>
      {loadingAllScans ? (
        <Loading />
      ) : (
        <div className='w-full flex flex-col'>
          {allScans?.length === 0 ? (
            <p>{t('noResults')}</p>
          ) : (
            <>
              <span className='mb-4'>{`${allScans?.length || 0} ${t('results')}`}</span>
              <Accordion sections={sections} />
            </>
          )}
        </div>
      )}
    </div>
  )
}

const ResumeSection = ({ scan }) => {
  return (
    <div className='w-full flex flex-col items-start gap-8'>
      <GeneralInfoSection
        vendor={scan?.vendor}
        isp={scan?.connection?.isp}
        ip={scan?.ip}
        asn={scan?.connection?.asn.toString()}
        city={scan?.city}
        country={scan?.country}
        flag={scan?.flag?.img}
        scanningTime={scan?.scanningTime}
      />

      <VulnerabilitiesSection vulnerabilities={scan?.vulnerabilities} />
    </div>
  )
}

ResumeSection.propTypes = {
  scan: PropTypes.object,
}
