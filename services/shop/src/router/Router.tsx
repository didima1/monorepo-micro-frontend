import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@components/App';
import { LazyShopPage } from '@pages/shop/ShopPage.lazy';
import { shopRoutes } from '@packages/shared/src/routes/shop';

const routes = [
    {
        path: shopRoutes.base,
        element: <App />,
        children: [
            {
                path: shopRoutes.main,
                element: (
                    <Suspense fallback={'loading...'}>
                        <LazyShopPage />
                    </Suspense>
                ),
            },
            {
                path: shopRoutes.second,
                element: (
                    <Suspense fallback={'loading...'}>
                        <div>
                            <h1>Shop second</h1>
                        </div>
                    </Suspense>
                ),
            },
        ],
    },
]

export const router = createBrowserRouter(routes);
 export default routes;
