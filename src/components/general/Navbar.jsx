import { Link } from 'react-router-dom'

import { Links } from '@/config'

export const Navbar = () => {
  const { LINKS_MAIN } = Links

  const navlinks = [
    {
      ...LINKS_MAIN.HOME,
    },
    // {
    //   ...LINKS_MAIN.SCAN,
    // },
    // {
    //   ...LINKS_MAIN.STYLES,
    // },
  ]
  return (
    <nav className='fixed z-50 w-full px-5 min-h-[10vh] bg-slate-950 flex items-center justify-center'>
      <div className='w-full justify-between flex'>
        <Link to={LINKS_MAIN.HOME.to}>
          <figure>
            <b>RS</b>
          </figure>
        </Link>

        <div className='flex gap-5'>
          {navlinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className='text-white hover:text-slate-100'
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
