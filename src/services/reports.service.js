import { rget } from './axios.instances'

export const getReportsVendorCVE = async () => {
  const { data } = await rget('reports/vendor/cve')
  return data
}

export const getReportsISPCVE = async () => {
  const { data } = await rget('reports/isp/cve')
  return data
}
