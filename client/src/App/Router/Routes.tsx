import {createBrowserRouter, Navigate} from 'react-router-dom'
import HomePage from '../../features/home/HomePage';
import Catalog from '../../features/catalog/catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import AboutPage from '../../features/About/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import App from '../layout/App'
import ServerError from '../../errors/ServerError';
import NotFound from '../../errors/NotFound';

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '',element: <HomePage />},
            {path: 'catalog',element: <Catalog darkMode={false}/>},
            {path: 'catalog/:id',element: <ProductDetails/>},
            {path: 'about',element: <AboutPage/>},
            {path: 'contact',element: <ContactPage/>},
            {path: 'server-error',element: <ServerError/>},
            {path: 'NotFound',element: <NotFound/>},
            {path: '*',element: <Navigate replace to='notfound'/>}


        ]
    }
])