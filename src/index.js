import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import {CntListScreen} from './components/list'
import {CntDetailsScreen} from './components/details'

const router = createBrowserRouter([
        {
            path: "/",
            element: <CntListScreen/>,
        },
        {
            path: '/:username',
            element: <CntDetailsScreen/>
        }
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
