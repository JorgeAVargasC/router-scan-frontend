import { userState } from '@/contexts/auth.context'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useRecoilState } from 'recoil'

import { Links } from '@/config'

import { serviceLogin, serviceRegister } from '@/services'

export default function Register() {
  const [, setUser] = useRecoilState(userState)
  // Estado local para almacenar los valores de los campos
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  // Manejador de evento para el campo de correo electrónico
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  // Manejador de evento para el campo de contraseña
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  // Manejador de evento para el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      
      const {message} = await serviceRegister({
        name,
        email,
        password,
      })

      console.log(message)

      const { user } = await serviceLogin({
        email,
        password,
      })

      toast.success(`Bienvenido, ${user.name}!`)

      localStorage.setItem('user', JSON.stringify(user))

      setUser(user)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }


  return (
    <div className='min-h-full grid place-items-center flex-1'>
      {/* card */}
      <div className='border p-5 bg-slate-900 border-slate-800 shadow-2xl shadow-slate-800 rounded-md w-full sm:w-[350px]'>
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label
              htmlFor='name'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Nombre
            </label>
            <input
              type='text'
              id='name'
              className='bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500'
              placeholder='Jhon Doe'
              required
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Correo Electrónico
            </label>
            <input
              type='email'
              id='email'
              className='bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500'
              placeholder='jhon.doe@gmail.com'
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='current-password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Contraseña
            </label>
            <input
              type='password'
              id='current-password'
              className='bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500'
              placeholder='•••••••••'
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          {loading ? (
            <div className='text-white grid place-items-center min-w-full bg-slate-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
              {/* spin loader */}
              <svg
                className='animate-spin h-5 w-5 text-white'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                />
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
                />
              </svg>



            </div>
          ) : (
            <button
            type='submit'
            className='text-white min-w-full bg-sky-500 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-500 dark:hover:bg-sky-500 dark:focus:ring-sky-500'
            >
              Registrarse
            </button>
          )}
        </form>

        <div className='mt-5 text-center'>
          <Link
            to={Links.LINKS_MAIN.LOGIN.to}
            className='text-sm font-medium text-gray-900 dark:text-white hover:underline'
          >
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  )
}
