/* eslint-disable no-unused-vars */
import exampleAllScans from '../data/example.all.response.json'
import exampleScan from '../data/example.response.json'

import { rget, rpost } from './axios.instances'

const serviceGetScan = async (body) => {
  const { data } = await rpost('scan',body)
  // return exampleScan
  return data
}

const serviceGetAllScans = async () => {
  const { data } = await rget('scan/all')
  // return exampleAllScans
  return data
}

const serviceFilterScans = async (body) => {
  const { data } = await rpost('scan/filter', body)
  return data
}

const serviceRegister = async (body) => {
  const { data } = await rpost('register', body)
  return data
}

const serviceLogin = async (body) => {
  const { data } = await rpost('login', body)
  return data
}

export {
  serviceGetScan,
  serviceGetAllScans,
  serviceFilterScans,
  serviceRegister,
  serviceLogin,
}
