import { FC } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { shopRoutes } from '@packages/shared/src/routes/shop';
import * as s from './app.module.scss'

interface Props {}

const App: FC<Props> = ({}) => {

   return (
       <div>
           <h1 className={s.test}>
               Shop module page
           </h1>
           <br/>
           <Link to={shopRoutes.main}>main</Link>
           <br/>
           <Link to={shopRoutes.second}>second</Link>
           <br/>
           <Outlet/>
       </div>
   )
}

export default App
