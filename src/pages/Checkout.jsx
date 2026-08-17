import { useState } from "react";

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "Cash on Delivery",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Order submitted:", formData);
    alert("Order placed successfully!");
  }

  const inputClasses =
    "w-full rounded-lg border border-nude-300 bg-nude-50 px-4 py-2.5 text-taupe-700 placeholder-taupe-400 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-blush-300 transition-colors duration-200";
  const labelClasses = "block text-sm font-medium text-taupe-600 mb-1.5";

  return (
    <div className="min-h-screen bg-nude-50 px-6 py-12">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm p-8">
        <h1 className="text-3xl font-semibold text-taupe-700 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className={labelClasses}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>Payment Method</label>

            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className={inputClasses}
            >
              <option>Cash on Delivery</option>
              <option>Card</option>
              <option>Mobile Money</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-2 bg-blush-400 text-white rounded-full py-3 font-medium hover:bg-blush-500 transition-colors duration-200"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;