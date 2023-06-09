export const Footer = () => {
  return (
    <footer className='w-full p-5 bg-slate-900 flex items-center justify-center'>
      <small className='text-center text-white'>
        Copyright © {new Date().getFullYear()} - All Rights Reserved
      </small>
    </footer>
  )
}
