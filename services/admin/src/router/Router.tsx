import { createBrowserRouter } from 'react-router-dom';
import App from '@components/App';
import React, { Suspense } from 'react';
import { LazyAdminPage } from '@pages/admin/AdminPage.lazy';
import { adminRoutes } from '@packages/shared/src/routes/admin';

const routes = [
    {
        path: adminRoutes.base,
        element: <App />,
        children: [
            {
                path: adminRoutes.main,
                element: (
                    <Suspense fallback={'loading...'}>
                        <LazyAdminPage />
                    </Suspense>
                ),
            },
        ],
    },
]

export const router = createBrowserRouter(routes)
export default routes;
