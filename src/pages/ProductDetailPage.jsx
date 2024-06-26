import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProductById } from '../api'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [products, setProducts] = useState({})

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (!token) {
      toast.error('You need to login')
      navigate('/login')
      return
    }
    getProductById(id)
      .then((product) => {
        setProducts(product)
        toast.success('Product loaded')
      })
      .catch((error) => {
        toast.error('Error to get product')
        console.error('Error to get product', error)
      })
  }, [id])

  return (
    <main className='flex justify-center items-center flex-col gap-4  w-full min-h-dvh'>
      <h1 className='text-4xl font-bold text-center '>
        Product Detail Page{' '}
      </h1>
      <section className=' rounded p-4 flex flex-col gap-4 max-w-sm w-full text-center bg-black/30 mt-10'>
        <p className='text-xl font-semibold'>{`Product: ${products.title}`}</p>
        <p className='text-sm'>{products.description}</p>
        <p>{`$${products.price}`}</p>
        <p>{`Category: ${products.category}`}</p>
        <p>{`In stock: ${products.stock}`}</p>
        <img src={products.thumbnail} alt='' />
        <Link to='/products' className='bg-blue-500 text-white border-2 border-blue-600 rounded-lg p-2 '>Return to Products</Link>
      </section>
    </main>
  )
}
