import { AppRoutes } from './routes'
import Backend from 'i18next-http-backend'

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './i18n/en.json'
import es from './i18n/es.json'

import { i18nState } from '@/contexts/i18n.context'
import { useRecoilState } from 'recoil'
export default function App() {

const [i18n] = useRecoilState(i18nState)

i18next
.use(Backend)
.use(initReactI18next)
.init({
  lng: i18n,
  fallbackLng: i18n,
  debug: true,
  resources: {
    en: {
      translation: en,
    },
    es:{
      translation: es,
    }
  },
})

  return <AppRoutes />
}
