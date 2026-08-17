import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/cart", label: "Cart" },
  { to: "/login", label: "Login" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  const linkClasses = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-blush-600 font-semibold"
        : "text-taupe-600 hover:text-blush-500"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-blush-50/90 backdrop-blur border-b border-blush-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="text-2xl font-semibold tracking-wide text-taupe-700"
          onClick={() => setIsOpen(false)}
        >
          Shopora
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === "/"}>
              {link.label === "Cart" ? (
                <span className="relative">
                  Cart
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-4 bg-blush-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </span>
              ) : (
                link.label
              )}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden text-taupe-600 hover:text-blush-500"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 pb-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClasses}
              end={link.to === "/"}
              onClick={() => setIsOpen(false)}
            >
              {link.label} {link.label === "Cart" && cart.length > 0 ? `(${cart.length})` : ""}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;