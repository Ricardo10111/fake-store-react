import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/products',
    element: <ProductsPage />
  },
  {
    path: '/products/:id',
    element: <ProductDetailPage />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
)
