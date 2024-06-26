import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main className='flex justify-center items-center flex-col gap-4  w-full min-h-dvh'>
      <h1 className='text-4xl font-semibold text-center'>
        Welcome to the Home Page
      </h1>
      <div className=' rounded p-4 flex flex-col gap-4 max-w-sm w-full'>
        <Link
          to='/login'
          className='bg-blue-500 text-white border-2 border-blue-600 rounded-lg p-2 text-center'
        >
          Login
        </Link>
        <Link
          to='/products'
          className='bg-blue-500 text-white border-2 border-blue-600 rounded-lg p-2 text-center'
        >
          Products
        </Link>
        <Link
          to='/products/123'
          className='bg-blue-500 text-white border-2 border-blue-600 rounded-lg p-2 text-center'
        >
          Producto 123
        </Link>
      </div>
    </main>
  )
}
