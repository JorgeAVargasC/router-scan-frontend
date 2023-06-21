import { Suspense, lazy, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { Links } from '@/config'

import { MainLayout } from '@/layouts'

import { Loading } from '@/components/general'

// const Scan = lazy(() => import('@/pages/scan'))
const Home = lazy(() => import('@/pages/home'))
const NotFound = lazy(() => import('@/pages/not-found'))
const Styles = lazy(() => import('@/pages/styles'))

export const AppRoutes = () => {
  const { LINKS_MAIN } = Links

  const mainRoutes = [
    // {
    //   ...LINKS_MAIN.SCAN,
    //   element: <Scan />,
    // },
    {
      ...LINKS_MAIN.HOME,
      element: <Home />,
    },
    {
      ...LINKS_MAIN.STYLES,
      element: <Styles />,
    },
    {
      ...LINKS_MAIN.NOT_FOUND,
      element: <NotFound />,
    },
  ]

  // every pathname change, scroll to top

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />

        {mainRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense
                fallback={
                  <div className='min-h-[88vh] grid place-items-center w-full'>
                    <Loading />
                  </div>
                }
              >
                {route.element}
              </Suspense>
            }
          />
        ))}

        <Route path='*' element={<Navigate to={LINKS_MAIN.NOT_FOUND.to} />} />
      </Route>
    </Routes>
  )
}
