import { Link } from 'react-router-dom'

import { Links } from '@/config'
import { useTranslation } from 'react-i18next'
import { TbRouter } from 'react-icons/tb'
import { useRecoilState } from 'recoil'
import { i18nState } from '@/contexts'

export const Navbar = () => {
  const { LINKS_MAIN } = Links

  // const navlinks = [
  //   {
  //     ...LINKS_MAIN.HOME,
  //   },
  //   // {
  //   //   ...LINKS_MAIN.SCAN,
  //   // },
  //   // {
  //   //   ...LINKS_MAIN.STYLES,
  //   // },
  // ]

  const { t } = useTranslation()
  const [,setI18n] = useRecoilState(i18nState)
  return (
    <nav className='fixed z-50 w-full px-5 min-h-[10vh] bg-slate-950 flex items-center justify-center'>
      <div className='w-full justify-between flex'>
        <Link to={LINKS_MAIN.HOME.to}>
          <figure className='flex items-center gap-4'>
            <TbRouter className='text-2xl text-white' />
            <b>{t('navbar.appName')}</b>
          </figure>
        </Link>

        <div className='flex gap-5'>
          {/* {navlinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className='text-white hover:text-slate-100'
            >
              {t(link.label)}
            </Link>
          ))} */}
          <div>
            <select
              className='text-white bg-slate-950 border rounded-md px-4 appearance-none border-white'
              onChange={(e) => {
                localStorage.setItem('i18nextLng', e.target.value)
                setI18n(e.target.value)
              }}
              defaultValue={localStorage.getItem('i18nextLng')}
            >
              <option value='en'>English</option>
              <option value='es'>Español</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  )
}
