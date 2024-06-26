import { useEffect, useState } from 'react'
import { getProducts } from '../api'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function ProductsPage() {
  //vamos a inventar un estado
  // const [count, setCount] = useState(0)

  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  // useEffect se ejecuta cuando
  // 1. Al terminar de reenderizar el componente
  // 2. Al cambiar alguna de sus dependencias

  // Recibe 2 parametros
  // 1. Una funcion que se ejecuta cuando se cumple la condicion
  // 2. Un array de dependencias que al cambiar alguna de ellas se ejecuta la funcion

  // Este useEffect especificamente se ejecuta al terminar de renderizar el componente

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (!token) {
      toast.error('You need to login')
      navigate('/login')
      return
    }
    getProducts()
      .then((prods) => {
        setProducts(prods)
      })
      .catch((error) => {
        toast.error('Error to get products')
        console.error('Error to get products', error)
      })
  }, [])

  // se ejecuta al cambiar la dependencia count y al terminar de renderizar el componente
  //   useEffect(() => {
  //     console.log('useEffect count', count)
  //   }, [count])

  // un useEffect sin dependencias se ejecuta al terminar de renderizar el componente y cada vez que se actualiza el componente (cada vez que se renderiza)
  // por eso es importante no tener useEffect sin dependencias
  //   useEffect(() => {
  //       console.log('useEffect sin dependencias')
  //     })

  // Esto es un peligtro para la performance de la aplicacion y puede causar un loop infinito
  // useEffect(() => {
  //     setCount(count + 1)
  //     console.log('wooooooo')
  // }, [count])

  return (
    <main>
      <h1 className='text-4xl font-semibold text-center'>Products</h1>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {products.map((product, idx) => {
          return (
            <article
              key={`prod-${idx}`}
              className='hover:bg-white/10 cursor-pointer rounded p-4'
            >
              <img src={product.thumbnail} alt={product.title} />
              <div className='flex justify-center flex-col gap-3'>
                <p className='text-center'>{product.title}</p>
                <Link
                  to={`/products/${product.id}`}
                  className='bg-white/50 w-full p-2 rounded text-center'
                >
                  {' '}
                  See details
                </Link>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}
