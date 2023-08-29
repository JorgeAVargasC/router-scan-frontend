import { useTranslation } from "react-i18next"

export const Footer = () => {
  const {t} = useTranslation()
  return (
    <footer className='w-full p-5 bg-slate-900 flex items-center justify-center'>
      <small className='text-center text-white'>
        {
          t('copyright', {date: new Date().getFullYear()})
        }
      </small>
    </footer>
  )
}
