import { useForm } from 'react-hook-form'
import { login } from '../api'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { useState } from 'react'

export default function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm()

  async function onSubmit(data) {
    try {
      const token = await login(data.username, data.password)
      if (token) {
        window.localStorage.setItem('token', token)
        toast.success('Welcome!')
        navigate('/products')
      } else {
        toast.error('Username or password incorrect')
        setError('root.credentials', {
          type: 'manual',
          message: 'Invalid credentials'
        })
      }
    } catch (error) {
      toast.error('Error to login')
      console.error('[login error]', error)
    }
  }

  function handleShowPassword() {
    // if (showPassword === true) {
    //   setShowPassword(false)
    // }else{
    //   setShowPassword(true)
    // }
    // La explicacion de arriba es lo mismo que la de abajo por que el !showPassword es para negar el valor de showPassword

    setShowPassword(!showPassword)


  }

  return (
    <main className='flex justify-center items-center flex-col gap-4  w-full min-h-dvh'>
      <h1 className='text-4xl font-bold text-center '>Login</h1>
      <form
        className={clsx(
          'border border-white/60 rounded p-4 flex flex-col gap-4 max-w-sm w-full',
          {
            'border-red-500': errors.root?.credentials // null safe access
          }
        )}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className='border border-white/60 rounded p-2 text-black'
          type='text'
          placeholder='Username'
          {...register('username', {
            required: { value: true, message: 'Username is required' }
          })}
        />
        <input
          className='border border-white/60 rounded p-2 text-black w-full bg-white'
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          {...register('password', {
            required: { value: true, message: 'Password is required' }
          })}
        />
        <span className='text-xs text-white/50 cursor-pointer  hover:text-white'
        onClick={handleShowPassword}>
          {showPassword ? '🙈 Hide password' : '🐵 Show password'}
        </span>
       
        {errors.root?.credentials && (
          <p className='text-red-500 text-sm'>
            {errors.root.credentials.message}
          </p>
        )}
        <button
          className='bg-blue-500 text-white border-2 border-blue-600 rounded-lg p-2  disabled:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed'
          type='submit'
        >
          Login
        </button>
      </form>
    </main>
  )
}
