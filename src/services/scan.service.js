/* eslint-disable no-unused-vars */
import exampleScan from '../data/example.response.json'

import { rget } from './axios.instances'

const serviceGetScan = async () => {
  const { data } = await rget('/scan')
  // return exampleScan
  return data
}

export { serviceGetScan }
