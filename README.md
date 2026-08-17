# Shopora

Shopora is a React storefront built with Vite and Tailwind CSS. It fetches product data from the [Fake Store API](https://fakestoreapi.com) and includes a shopping cart and checkout flow.

## Features

- Browse products fetched from a live API
- Product cards with add-to-cart action
- Cart page with item removal and running total
- Checkout form for order details
- Responsive navbar with a nude and pink pastel theme

## Tech Stack

- React 19
- React Router
- Tailwind CSS 4
- Axios
- Vite

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
  components/   Reusable UI components (Navbar, ProductCard)
  context/      React context providers (CartContext)
  pages/        Route-level pages (Home, Products, Cart, Checkout, Login, ProductDetails)
  services/     API client setup
```

## Design

The UI uses a nude and blush pink pastel color palette defined as Tailwind theme tokens in [src/index.css](src/index.css).