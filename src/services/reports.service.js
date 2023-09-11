import { rget } from './axios.instances'

export const getReportsVendorCVE = async () => {
  const { data } = await rget('reports/vendor/cve')
  return data
}

export const getReportsISPCVE = async () => {
  const { data } = await rget('reports/isp/cve')
  return data
}

export const gerReportsPortCVE = async () => {
  const { data } = await rget('reports/port/cve')
  return data
}

export const getReportsCVE = async () => {
  const { data } = await rget('reports/cve')
  return data
}

export const getReportsISP = async () => {
  const { data } = await rget('reports/isp')
  return data
}

export const getReportsVendor = async () => {
  const { data } = await rget('reports/vendor')
  return data
}

export const getReportsIP = async () => {
  const { data } = await rget('reports/ip')
  return data
}

export const getReportsIPScanningTime = async () => {
  const { data } = await rget('reports/ip/scanning_time')
  return data
}