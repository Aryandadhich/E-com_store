import {createBrowserRouter} from 'react-router-dom'
import HomePage from '../../features/home/HomePage';
import Catalog from '../../features/catalog/catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import AboutPage from '../../features/About/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import App from '../layout/App'

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '',element: <HomePage />},
            {path: 'catalog',element: <Catalog darkMode={false}/>},
            {path: 'catalog/:id',element: <ProductDetails/>},
            {path: 'about',element: <AboutPage/>},
            {path: 'contact',element: <ContactPage/>}
        ]
    }
])