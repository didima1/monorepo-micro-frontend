import { FC } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { adminRoutes } from '@packages/shared/src/routes/admin';

interface Props {}

const App: FC<Props> = ({}) => {

   return (
       <div>
           <h1>
               Admin module page base
           </h1>
           <br/>
           <Link to={adminRoutes.main}>main</Link>
           <br/>
           <Outlet/>
       </div>
   )
}

export default App
