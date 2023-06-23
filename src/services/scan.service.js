/* eslint-disable no-unused-vars */
import exampleScan from '../data/example.response.json'
import exampleAllScans from '../data/example.all.response.json'

import { rget } from './axios.instances'

const serviceGetScan = async () => {
  const { data } = await rget('/scan')
  // return exampleScan
  return data
}

const serviceGetAllScans = async () => {
  const { data } = await rget('/scan/all')
  // return exampleAllScans
  return data
}

export { 
  serviceGetScan,
  serviceGetAllScans
}
