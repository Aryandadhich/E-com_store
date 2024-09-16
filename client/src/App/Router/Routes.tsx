import {createBrowserRouter} from 'react-router-dom'
import App from '../layout/App'
import HomePage from '../../features/home/HomePage'

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '',element: <HomePage/>},
        ]
    }
])