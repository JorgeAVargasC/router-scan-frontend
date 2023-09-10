import { i18nState } from '@/contexts/i18n.context'

import { useEffect } from 'react'
import { initReactI18next } from 'react-i18next'

import i18next from 'i18next'
import Backend from 'i18next-http-backend'
import { useRecoilState } from 'recoil'

import { AppRoutes } from './routes'

import { useReactCharts } from './hooks'

import { userState } from './contexts/auth.context'
import en from './i18n/en.json'
import es from './i18n/es.json'

export default function App() {
  const [i18n] = useRecoilState(i18nState)
  const [, setUser] = useRecoilState(userState)
  // restore session from local storage
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  useReactCharts()

  const googleTranslateElementInit = () => {
    if (window.google) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'es',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          includedLanguages: 'en,es,pt',
          autoDisplay: false,
          multilanguagePage: true,
        },
        'google_translate_element'
      )
    } else {
      console.error('Google Translate script has not loaded.')
    }
  }

  useEffect(() => {
    var addScript = document.createElement('script')
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    )

    // Check if the script has already been added to the body
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      document.body.appendChild(addScript)
    } else {
      // Script already exists, don't add it again
      console.warn('Google Translate script has already been added.')
    }

    window.googleTranslateElementInit = googleTranslateElementInit
  }, [])

  return (
    <>
      <AppRoutes />
    </>
  )
}
