import { userState } from '@/contexts/auth.context'

import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { useRecoilState } from 'recoil'

import { Links } from '@/config'

import {
  // Aside,
  Footer,
  Navbar,
} from '../components/general'

export const MainLayout = () => {
  const [user] = useRecoilState(userState)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (user) {
      navigate(Links.LINKS_MAIN.HOME.to)
    } else {
      if (pathname === Links.LINKS_MAIN.LOGIN.to) return
      if (pathname === Links.LINKS_MAIN.REGISTER.to) return
      navigate(Links.LINKS_MAIN.LOGIN.to)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, user])

  return (
    <div className='bg-slate-950 text-white min-h-screen w-full flex flex-col items-center justify-between scroll-smooth '>
      <Navbar />
      <main className='w-full mt-[10vh] max-w-[1400px] min-h-[80vh] p-5 flex-1 flex flex-col items-stretch'>
        {user && <p className='text-center'>{`Hola, ${user.name}`}</p>}
        {user && <p className='text-center mb-4'>{`${user.email}`}</p>}

        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
