import { FC } from 'react'
// TODO вернуть импорт
import '@/icons'
import { Link, Outlet } from 'react-router-dom';
import { adminRoutes } from '@packages/shared/src/routes/admin';
import { shopRoutes } from '@packages/shared/src/routes/shop';

interface Props {}

const App: FC<Props> = ({}) => {

   return (
       <div>
           <h1>
               App
           </h1>
           <Link to={adminRoutes.base}>admin</Link>
           <br/>
           <Link to={shopRoutes.base}>shop</Link>
           <br/>
           <Link to={shopRoutes.second}>shop/second</Link>
           <Outlet/>
       </div>
   )
}

export default App
