import {Route, Routes} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard';
import Addrecord from '../Pages/Addrecord';

function AppRoutes() {
  return (
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/addrecord" element={<Addrecord/>}></Route>
        </Routes>
  );
}

export default AppRoutes;
