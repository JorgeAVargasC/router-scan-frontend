import { atom } from 'recoil'

export const scanState = atom({
  key: 'scan',
  default: null,
})

export const scanLoadingState = atom({
  key: 'scanLoading',
  default: false,
})
