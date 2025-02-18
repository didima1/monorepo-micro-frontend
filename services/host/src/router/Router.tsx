import { createBrowserRouter } from 'react-router-dom';
import App from '@components/App';
import React from 'react';
import adminRoutes from 'admin/Router'
import shopRoutes from 'shop/Router'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            ...shopRoutes,
            ...adminRoutes,
        ],
    },
])
