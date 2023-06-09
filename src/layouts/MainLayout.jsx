import { Outlet } from 'react-router-dom'

import {
  // Aside,
  Footer,
  Navbar,
} from '../components/general'

export const MainLayout = () => {
  return (
    <div className='bg-slate-950 text-white min-h-screen w-full flex flex-col items-stretch justify-between scroll-smooth '>
      <Navbar />

      <main className='w-full mt-[12vh] min-h-[88vh] p-5 pb-60 flex-1 flex flex-col items-stretch'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
