import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home';
import Product from './views/Product';
import Cart from './views/Cart';
import NotFound from './views/NotFound';

const browserRouter = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/product/:id', element: <Product /> },
	{ path: '/cart', element: <Cart /> },
	{ path: '/*', element: <NotFound /> },
]);

function App() {
	return <RouterProvider router={browserRouter} />;
}

export default App;
