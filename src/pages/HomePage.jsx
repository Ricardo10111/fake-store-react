import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div>
            <h1 className="text-center text-black font-bold text-[30px]">Welcome to the Home Page</h1>
            <p>This is the Home Page content</p>
            <div className="flex flex-col justify-center items-center gap-5">
                <Link to="/login" className="bg-blue-300 border-blue-600">Login</Link>
                <Link to="/products">Products</Link>
                <Link to="/products/123">Producto 123</Link>
            </div>
        </div>
    )
}