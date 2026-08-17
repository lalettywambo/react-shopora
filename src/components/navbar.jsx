function Navbar() {
  return (
    <nav className="bg-[#F8DDE5] text-[#6B4F57] px-8 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">
        Shopora
      </h1>

      <div className="flex gap-8">
        <a href="/" className="hover:text-[#C77D92]">
          Home
        </a>

        <a href="/products" className="hover:text-[#C77D92]">
          Products
        </a>

        <a href="/cart" className="hover:text-[#C77D92]">
          Cart
        </a>

        <a href="/login" className="hover:text-[#C77D92]">
          Login
        </a>
      </div>
    </nav>
  )
}

export default Navbar