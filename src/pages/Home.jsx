import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blush-50 to-nude-50">
      <section className="text-center py-28 px-6">
        <span className="inline-block text-sm tracking-widest uppercase text-blush-500 mb-4">
          New Season
        </span>

        <h1 className="text-5xl font-semibold text-taupe-700 mb-5">
          Welcome to Shopora
        </h1>

        <p className="text-taupe-500 mb-10 max-w-md mx-auto">
          Find something you love.
        </p>

        <Link
          to="/products"
          className="inline-block bg-blush-400 text-white px-8 py-3 rounded-full font-medium tracking-wide hover:bg-blush-500 transition-colors duration-200 shadow-sm"
        >
          Shop Now
        </Link>
      </section>
    </div>
  )
}

export default Home