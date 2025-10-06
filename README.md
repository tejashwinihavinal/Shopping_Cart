# TechStore - Shopping Cart Application

A modern, responsive shopping cart application built with Next.js, TypeScript, and Tailwind CSS. Features a clean UI with toast notifications, dynamic button states, and a smooth sidebar cart experience.

## Features

- **Product Catalog**: Browse a variety of tech products with emoji icons and pricing
- **Add to Cart**: Click "Add to Cart" to add items with instant toast feedback
- **Dynamic Button States**: Button changes from blue to black when item is in cart
- **Sidebar Cart**: Smooth sliding sidebar cart with quantity controls
- **Persistent Cart**: Cart data is saved in localStorage
- **Toast Notifications**: Success messages for adding and removing items
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean UI**: Modern design with hover effects and smooth transitions

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **State Management**: React Hooks with localStorage persistence

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Shopping_Cart
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
my-app/
├── app/
│   ├── api/
│   │   ├── products/     # Product API endpoint
│   │   └── checkout/     # Checkout API endpoint
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Header.tsx        # App header with cart button
│   ├── ProductCard.tsx   # Individual product card
│   ├── ProductGrid.tsx   # Product grid layout
│   ├── CartModal.tsx     # Sidebar cart component
│   └── CartItem.tsx      # Cart item with controls
├── hooks/
│   ├── useProducts.ts    # Product data fetching
│   └── useCart.ts        # Cart state management
├── types/
│   └── product.ts        # TypeScript type definitions
├── utils/
│   └── helpers.ts        # Utility functions
└── public/               # Static assets
```

## API Endpoints

### GET /api/products
Returns a list of available products.

### POST /api/checkout
Processes the cart checkout with cart items.

## Key Components

### ProductCard
- Displays product information
- Handles add to cart functionality
- Shows toast notification on add
- Changes button color based on cart status

### CartModal
- Sidebar-style cart overlay
- Quantity adjustment controls
- Item removal with toast feedback
- Checkout functionality

### useCart Hook
- Manages cart state
- Persists data to localStorage
- Provides cart operations (add, remove, update quantity)

## Styling

The application uses Tailwind CSS for styling with:
- Responsive grid layouts
- Smooth transitions and animations
- Hover effects on interactive elements
- Clean, modern design aesthetic

## Deployment

The app can be deployed to Vercel, Netlify, or any platform supporting Next.js:

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
