import { userState } from '@/contexts/auth.context'

import { useEffect, useState } from 'react'
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

  const [success, setSuccess] = useState(false)
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
    // Aquí puedes realizar acciones como enviar los datos al servidor
    // o realizar validaciones
    setLoading(true)
    try {
      // Llamar al servicio de inicio de sesión
      toast.promise(
        serviceRegister({
          name,
          email,
          password,
        }),
        {
          pending: 'Registrando usuario...',
          success: 'Usuario registrado correctamente',
          error: 'Error al registrar usuario',
        }
      )
      const { message } = await serviceRegister({
        name,
        email,
        password,
      })
      console.log(message)
      setSuccess(true)
    } catch (error) {
      setLoading(false)
      // Manejar errores de inicio de sesión
      console.error('Error al iniciar sesión:', error)
      toast.error(error.response.data.error)
    }
  }

  const login = async () => {
    toast.promise(
      serviceLogin({
        email,
        password,
      }),
      {
        pending: 'Iniciando sesión...',
        success: 'Sesión iniciada correctamente',
        error: 'Error al iniciar sesión',
      }
    )

    const response2 = await serviceLogin({
      email,
      password,
    })

    // Comprobar si la respuesta contiene el token de autenticación u otros datos necesarios
    if (response2?.user) {
      // Actualizar el estado del usuario en el contexto de Recoil
      setUser(response2.user)
      setLoading(false)
      // Mostrar un mensaje de éxito
    } else {
      // Mostrar un mensaje de error si la respuesta no contiene el token
      console.error('Error al iniciar sesión')
    }
  }

  useEffect(() => {
    if (success) {
      login()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success])

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
            <div className='text-white min-w-full bg-slate-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
              Cargando
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
