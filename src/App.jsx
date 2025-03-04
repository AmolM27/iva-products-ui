import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
// Layouts
import RootLayout from './layouts/RootLayout';
// Loaders
import { productsLoader } from './pages/Home';
import { CartProvider } from './pages/CartContext'; // Import CartProvider
import Checkout  from './pages/Checkout'; 

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} loader={productsLoader} />
                <Route path="about" element={<About />} />
                <Route path="checkout" element={<Checkout />} />
            </Route>
        )
    );

    return (
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    );
}

export default App;
