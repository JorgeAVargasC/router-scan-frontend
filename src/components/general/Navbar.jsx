/* eslint-disable no-undef */
// import { i18nState } from '@/contexts'
import { userState } from '@/contexts/auth.context'

import { useTranslation } from 'react-i18next'
import { TbLogout, TbRouter } from 'react-icons/tb'
import { Link, useNavigate } from 'react-router-dom'

import { useRecoilState } from 'recoil'

// import { useRecoilState } from 'recoil'
import { Links } from '@/config'

export const Navbar = () => {
  const [user,setUser] = useRecoilState(userState)

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
  const navigate = useNavigate()
  // const [, setI18n] = useRecoilState(i18nState)
  return (
    <nav className='fixed z-50 w-full px-5 min-h-[80px] bg-slate-950 flex items-center justify-center max-w-[1400px]'>
      <div className='w-full justify-between flex'>
        <Link to={LINKS_MAIN.HOME.to}>
          <figure className='flex items-center gap-4'>
            <TbRouter className='text-2xl text-white' />
            <b className='hidden md:block'>{t('navbar.appName')}</b>
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
          <div className='flex gap-2 items-center '>
            {user && (
              <button
                type='submit'
                onClick={() => {
                  setUser(null)
                  navigate(LINKS_MAIN.LOGIN.to)
                  localStorage.removeItem('user')
                }}
                className='text-white bg-sky-500 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto p-1 text-center dark:bg-sky-500 dark:hover:bg-sky-500 dark:focus:ring-sky-500'
              >
                <TbLogout size={20} />
              </button>
            )}

            <div>
              {/* <select
              className='text-white bg-slate-950 border rounded-md px-4 appearance-none border-white'
              onChange={(e) => {
                localStorage.setItem('i18nextLng', e.target.value)
                setI18n(e.target.value)
              }}
              defaultValue={localStorage.getItem('i18nextLng')}
            >
              <option value='en'>English</option>
              <option value='es'>Español</option>
            </select> */}

              <div id='google_translate_element'></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
