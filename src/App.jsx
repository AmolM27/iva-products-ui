import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
// Layouts
import RootLayout from './layouts/RootLayout';
//Loaders
import { productsLoader } from './pages/Home';

function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} loader={productsLoader}  />
          <Route path="about" element={<About />} />
        </Route>
      )
    );

    return <RouterProvider router={router} />;
}

export default App;
