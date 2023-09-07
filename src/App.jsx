import { i18nState } from '@/contexts/i18n.context'

import { useEffect } from 'react'
import { initReactI18next } from 'react-i18next'

import i18next from 'i18next'
import Backend from 'i18next-http-backend'
import { useRecoilState } from 'recoil'

import { AppRoutes } from './routes'

import en from './i18n/en.json'
import es from './i18n/es.json'

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
        es: {
          translation: es,
        },
      },
    })

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'es',
        // eslint-disable-next-line no-undef
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        includedLanguages: 'en,es,pt',
        autoDisplay: false,
        multilanguagePage: true,
      },
      'google_translate_element'
    )
  }

  useEffect(() => {
    var addScript = document.createElement('script')
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    )
    document.body.appendChild(addScript)
    window.googleTranslateElementInit = googleTranslateElementInit
  }, [])

  return (
    <>
      <AppRoutes />
    </>
  )
}
